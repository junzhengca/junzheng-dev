'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Position = { x: number; y: number };

export default function DraggableMascot() {
  const [position, setPosition] = useState<Position | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const mascotRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<Position | null>(null);
  const grabOffset = useRef<Position>({ x: 0, y: 0 });

  const clamp = useCallback((x: number, y: number, width: number, height: number) => ({
    x: Math.max(0, Math.min(window.innerWidth - width, x)),
    y: Math.max(0, Math.min(window.innerHeight - height, y)),
  }), []);

  useEffect(() => {
    const keepInView = () => {
      const element = mascotRef.current;
      if (!element || positionRef.current === null) return;
      const rect = element.getBoundingClientRect();
      const next = clamp(rect.left, rect.top, rect.width, rect.height);
      positionRef.current = next;
      setPosition(next);
    };

    window.addEventListener('resize', keepInView);
    return () => window.removeEventListener('resize', keepInView);
  }, [clamp]);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    grabOffset.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    positionRef.current = { x: rect.left, y: rect.top };
    setPosition(positionRef.current);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const next = clamp(
      event.clientX - grabOffset.current.x,
      event.clientY - grabOffset.current.y,
      rect.width,
      rect.height,
    );
    positionRef.current = next;
    setPosition(next);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 32 : 12;
    const movement: Record<string, Position> = {
      ArrowUp: { x: 0, y: -step },
      ArrowDown: { x: 0, y: step },
      ArrowLeft: { x: -step, y: 0 },
      ArrowRight: { x: step, y: 0 },
    };
    const delta = movement[event.key];
    if (!delta) return;
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const next = clamp(rect.left + delta.x, rect.top + delta.y, rect.width, rect.height);
    positionRef.current = next;
    setPosition(next);
  }

  return (
    <div
      className={`site-mascot${position ? ' site-mascot--positioned' : ''}${isDragging ? ' site-mascot--dragging site-mascot--walking' : ''}`}
      ref={mascotRef}
      style={position ? { left: position.x, top: position.y } : undefined}
      role="group"
      aria-label="Jun’s character. Drag to move, or focus and use the arrow keys. Hold Shift to move farther."
      aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight Shift+ArrowUp Shift+ArrowDown Shift+ArrowLeft Shift+ArrowRight"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={() => setIsDragging(false)}
      onPointerCancel={() => setIsDragging(false)}
      onLostPointerCapture={() => setIsDragging(false)}
    >
      <Image
        className="site-mascot__idle"
        src="/jun-mascot.webp?v=2"
        alt="Jun’s chibi character in a cat-ear hoodie, holding a steaming Starbucks coffee."
        width={900}
        height={1748}
        draggable={false}
        unoptimized
        preload
      />
      <span className="site-mascot__walk" aria-hidden="true" />
    </div>
  );
}
