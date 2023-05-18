import { mock, MockProxy } from "jest-mock-extended";

import { paramsWithUserIdDtoFactory } from "ᐸDtos testingᐳ";

import { CheckUserExistsQuery } from "../../../src/users/dataAccess/index";
import { UserNotFoundException } from "../../../src/users/exceptions/index";
import { CheckUserExistsUseCase } from "../../../src/users/useCases/index";

describe("CheckUserExistsUseCase", () => {
  let useCase: CheckUserExistsUseCase;

  let checkUserExistsQuery: MockProxy<CheckUserExistsQuery>;

  beforeAll(() => {
    checkUserExistsQuery = mock();

    useCase = new CheckUserExistsUseCase(checkUserExistsQuery);
  });

  it("must throw exception if user doesn't exists", async () => {
    const paramsWithUserIdDto = paramsWithUserIdDtoFactory.build({
      userId: "1",
    });

    checkUserExistsQuery.ask.mockResolvedValue(false);

    await expect(useCase.execute(paramsWithUserIdDto)).rejects.toThrow(
      UserNotFoundException,
    );
  });

  it("must resolves without exceptions if user exists", async () => {
    const paramsWithUserIdDto = paramsWithUserIdDtoFactory.build({
      userId: "1",
    });

    checkUserExistsQuery.ask.mockResolvedValue(true);

    await expect(useCase.execute(paramsWithUserIdDto)).resolves.not.toThrow();
  });
});
