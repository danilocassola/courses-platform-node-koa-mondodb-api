import jwt from 'jsonwebtoken';

import config from '../config';
import User from '../user/user.model';

const token = async (ctx) => {
  const user = await User.findById(ctx.state.userId);

  const payload = {
    id: user.id,
    isAdmin: user.isAdmin,
  };
  const authToken = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1d' });

  ctx.status = 200;
  ctx.state.token = authToken;
  ctx.append('token', authToken);
};

export default token;
