import { ConflictException } from "../../app/common/exceptions/conflict-exception";
import { MovementTypeInput } from "../../app/resolvers/inputs/movement-type.input";
import { MovementTypeService } from "../../app/services/movement-type.service";
import { MovementDirectionEnum } from "../../app/types/movement-direction.enum";
import { movementTypesMock } from "../mocks/movement-types.mock";
import { repositoryMock } from "../mocks/respository.mock";

describe("MovementTypeService test suite", () => {
  let movementTypeService: MovementTypeService;

  const movementTypeInput: MovementTypeInput = {
    name: "",
    direction: MovementDirectionEnum.IN,
  };

  beforeEach(() => {
    movementTypeService = new MovementTypeService(repositoryMock as any);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Should createMovementType", async () => {
    repositoryMock.create.mockReturnValueOnce({});
    await movementTypeService.createMovementType(movementTypeInput);
    expect(repositoryMock.create).toBeCalledWith(movementTypeInput);
  });

  test("Should return an error when create method fail", async () => {
    const expectedError = new Error("Repository failure");

    repositoryMock.create.mockReturnValueOnce({});
    repositoryMock.save.mockRejectedValueOnce(expectedError);

    try {
      await movementTypeService.createMovementType(movementTypeInput);
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
  });

  test("Should return movement types", async () => {
    repositoryMock.find.mockResolvedValueOnce(movementTypesMock);

    const result = await movementTypeService.getMovementTypes();
    expect(repositoryMock.find).toBeCalledTimes(1);
    expect(result).toEqual(movementTypesMock);
  });

  test("Should return movement type by id", async () => {
    const someMovementTypeId = 1;
    const expectedResult = movementTypesMock[0];
    repositoryMock.findOneBy.mockReturnValueOnce(expectedResult);

    const result = await movementTypeService.getMovementTypeById(
      someMovementTypeId
    );

    expect(repositoryMock.findOneBy).toBeCalledWith({ id: someMovementTypeId });
    expect(result).toEqual(expectedResult);
  });

  test("Should throw an error when id doesn't exists", async () => {
    const someMovementTypeId = 1;
    repositoryMock.findOneBy.mockResolvedValueOnce(null);

    try {
      await movementTypeService.getMovementTypeById(someMovementTypeId);

      expect(repositoryMock.findOneBy).toBeCalledWith({
        id: someMovementTypeId,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(ConflictException);
    }
  });

  test("Should update a movement type", async () => {
    const someMovementTypeId = 1;
    const movementTypeUpdateInput: MovementTypeInput = {
      name: "updatedName",
      direction: MovementDirectionEnum.OUT,
    };

    repositoryMock.findOneBy.mockResolvedValueOnce(movementTypesMock[0]);
    repositoryMock.findOneBy.mockResolvedValueOnce({
      ...movementTypesMock[0],
      ...movementTypeUpdateInput,
    });
    const mockDate = new Date();

    jest.useFakeTimers().setSystemTime(mockDate);

    const result = await movementTypeService.updateMovementType(
      someMovementTypeId,
      movementTypeUpdateInput
    );

    expect(repositoryMock.update).toBeCalledWith(
      { id: someMovementTypeId },
      { ...movementTypeUpdateInput, updatedAt: mockDate }
    );
    expect(result).toEqual({
      ...movementTypesMock[0],
      ...movementTypeUpdateInput,
    });
  });

  test("Should throw an error if movement type to update doesn't exists", async () => {
    const someMovementTypeId = 1;
    const movementTypeUpdateInput: MovementTypeInput = {
      name: "updatedName",
      direction: MovementDirectionEnum.OUT,
    };

    repositoryMock.findOneBy.mockResolvedValueOnce(null);

    try {
      await movementTypeService.updateMovementType(
        someMovementTypeId,
        movementTypeUpdateInput
      );
    } catch (error) {
      expect(error).toBeInstanceOf(ConflictException);
    }
  });

  test("Should delete a movement type", async () => {
    const someMovementTypeId = 1;
    repositoryMock.findOneBy.mockResolvedValueOnce(movementTypesMock[0]);
    repositoryMock.remove.mockResolvedValueOnce(movementTypesMock[0]);

    const result = await movementTypeService.deleteMovementType(
      someMovementTypeId
    );

    expect(repositoryMock.remove).toBeCalledWith(movementTypesMock[0]);
    expect(result).toEqual(movementTypesMock[0]);
  });
});
