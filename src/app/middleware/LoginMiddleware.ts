import { NextApiRequest, NextApiResponse } from 'next';
import { authUser } from '@/utils/serverHelpers';
import { cookies } from 'next/headers';
import { useRouter } from 'next/router';

const loginMiddleware = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = cookies().get('token');
  if (!token) {
    const router = useRouter();
    router.push('/login');
    return;
  }

  const user = await authUser();
  if (!user) {
    const router = useRouter();
    router.push('/login');
    return;
  }

};

export default loginMiddleware;