import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <div className="space-y-8">
      {experience.map((job, idx) => (
        <div key={idx} className="block">
          <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
            <span className="font-bold">@ {job.company}</span>
            <span className="opacity-50">{job.period}</span>
          </div>
          <div className="mb-2 italic opacity-80">{job.role}</div>
          <div className="opacity-90 mb-2 pl-4 border-l-2 border-gray-200 dark:border-gray-800">
            {job.description}
          </div>
          <div className="opacity-50 text-xs space-y-1">
            <div>Stack: {job.stack.join(', ')}</div>
            {job.projects && job.projects.length > 0 && (
              <div>Projects: {job.projects.join(', ')}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

