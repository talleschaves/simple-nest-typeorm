import { UsersDto } from './users.dto';

describe('Users', () => {
  it('should be defined', () => {
    expect(new UsersDto()).toBeDefined();
  });
});
