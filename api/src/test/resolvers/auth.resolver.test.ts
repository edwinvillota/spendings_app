import { AuthResolver } from "../../app/resolvers/auth.resolver";
import { CredentialsInput } from "../../app/resolvers/inputs/credentials-input";

describe("AuthResolver test suite", () => {
  let authResolver: AuthResolver;

  const authServiceMock = {
    login: jest.fn(),
  };

  const contextMock = {
    user: {},
  };

  beforeEach(() => {
    authResolver = new AuthResolver(authServiceMock as any);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Should call to login function", async () => {
    const credentialsMock: CredentialsInput = {
      email: "some@email.com",
      password: "123456",
    };
    authServiceMock.login.mockResolvedValueOnce({});
    await authResolver.login(credentialsMock);
    expect(authServiceMock.login).toBeCalledWith(credentialsMock);
  });

  test("Should return logged user data", async () => {
    contextMock.user = { id: 1, name: "someName" };

    expect(await authResolver.getLoggedUser(contextMock as any)).toEqual(
      contextMock.user
    );
  });
});
