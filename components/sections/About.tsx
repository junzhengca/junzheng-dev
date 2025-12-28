import { profile } from '@/data/profile';

export default function About() {
  return (
    <div className="space-y-6">
      <div>
        <span className="font-bold block mb-1">## BIO</span>
        <p>{profile.bio}</p>
      </div>

      <div>
        <span className="font-bold block mb-1">## EDUCATION</span>
        <p>University of Toronto</p>
        <p className="opacity-60">B.Sc. Computer Science</p>
      </div>

      <div>
        <span className="font-bold block mb-1">## SKILLS</span>
        <p>Go, C++, React, System Design, AI/ML, Security</p>
      </div>
    </div>
  );
}

