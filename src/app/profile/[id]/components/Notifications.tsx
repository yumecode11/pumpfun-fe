import { Info, UserPlus } from 'lucide-react';
import { FC } from 'react';

const Notifications: FC = () => {
  return (
    <div className="pt-2">
      <ul>
        <li className="w-full border-t border-border pt-4 mt-4 first:border-0 first:pt-0 first:mt-0 relative pl-9 min-h-5">
          <UserPlus className="w-5 h-5 absolute left-0" />
          <p className="text-xs">
            <span className="text-foreground font-semibold text-sm block">L0r3m followed you</span>
          </p>
        </li>
        <li className="w-full border-t border-border pt-4 mt-4 first:border-0 first:pt-0 first:mt-0 relative pl-9 min-h-5">
          <Info className="w-5 h-5 absolute left-0" />
          <p className="text-xs">
            <span className="text-foreground font-semibold text-sm block">Lorem Ipsum Information</span>
            <span className="text-foreground/80 text-xs mt-1 block">Fusce ac dignissim erat. Morbi tristique dolor nec rhoncus dignissim. Vestibulum consectetur placerat quam ac laoreet. Fusce dictum ut massa vel molestie. Curabitur ac mauris sed augue molestie dapibus in in nisl.</span>
          </p>
        </li>
      </ul>
    </div>
  )
};

export default Notifications;
