import { Avatar, AvatarFallback, AvatarImage } from '@/components/common/Avatar';
import { Button } from '@/components/primitives/Button';
import { RefreshCw, User } from 'lucide-react';
import { FC } from 'react';

const DUMMY_USERS = [
  {
    name: 'namjuk',
    followers: 878
  },
  {
    name: 'L0r3m',
    followers: 731
  },
  {
    name: 'theIpsum',
    followers: 940
  },
  {
    name: '_DrD00m_',
    followers: 123
  },
  {
    name: '0xDEADBEEF',
    followers: 932
  }
]
const UsersToFollow: FC = () => {
  return (
    <div className="px-2 my-8">
      <div className="flex items-center">
        <p className="text-foreground text-base tracking-wide">
          Users to follow
        </p>
        <Button variant="link" className="ml-2 text-foreground/50">
          Next batch
          <RefreshCw className="h-4 w-4 ml-2" />
        </Button>
      </div>
      <p className="text-foreground/80 text-xs">Follow some of users to start curating your feed</p>

      <div className="flex mt-4 w-full overflow-y-hidden scrollbar-none">
        <ul className='flex flex-row md:flex-wrap gap-4'>
          {DUMMY_USERS.map(user => (
            <li key={user.name} className="bg-card rounded-lg p-4 text-center w-32">
              <Avatar className="w-10 h-10 mx-auto">
                <AvatarImage src="https://picsum.photos/40/40" alt="" />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>

              <p className="text-foreground text-sm text-center mt-4 truncate">{user.name}</p>
              <p className="text-foreground/50 text-xs text-center">{user.followers} followers</p>

              <Button className='mt-4'>
                Follow
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersToFollow;
