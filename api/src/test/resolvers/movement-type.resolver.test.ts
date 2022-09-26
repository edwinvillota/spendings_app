import {
  MovementTypeInput,
  MovementTypeUpdateInput,
} from "../../app/resolvers/inputs/movement-type.input";
import { MovementTypeResolver } from "../../app/resolvers/movement-type.resolver";
import { MovementDirectionEnum } from "../../app/types/movement-direction.enum";

describe("MovementType test suite", () => {
  let movementTypeResolver: MovementTypeResolver;

  const movementTypeServiceMock = {
    createMovementType: jest.fn(),
    getMovementTypes: jest.fn(),
    getMovementTypeById: jest.fn(),
    updateMovementType: jest.fn(),
    deleteMovementType: jest.fn(),
  };

  beforeEach(() => {
    movementTypeResolver = new MovementTypeResolver(
      movementTypeServiceMock as any
    );
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Should call createMovementType method", async () => {
    const movementTypeInput: MovementTypeInput = {
      name: "someName",
      direction: MovementDirectionEnum.IN,
    };

    movementTypeServiceMock.createMovementType.mockResolvedValueOnce({});

    await movementTypeResolver.createMovementType(movementTypeInput);
    expect(movementTypeServiceMock.createMovementType).toBeCalledWith(
      movementTypeInput
    );
  });

  test("Should call getMovementTypes method", async () => {
    movementTypeServiceMock.getMovementTypes.mockResolvedValueOnce([]);

    await movementTypeResolver.getMovementTypes();

    expect(movementTypeServiceMock.getMovementTypes).toBeCalledTimes(1);
  });

  test("Should call getMovementTypeById method", async () => {
    const someMovementTypeId = 1;
    movementTypeServiceMock.getMovementTypeById.mockResolvedValueOnce({});

    await movementTypeResolver.getMovementTypeById(someMovementTypeId);

    expect(movementTypeServiceMock.getMovementTypeById).toBeCalledWith(
      someMovementTypeId
    );
  });

  test("Should call updateMovementType method", async () => {
    const someMovementTypeId = 1;
    const movementTypeInput: MovementTypeUpdateInput = {
      name: "updateName",
      direction: MovementDirectionEnum.OUT,
    };

    movementTypeServiceMock.updateMovementType.mockResolvedValueOnce({});

    await movementTypeResolver.updateMovementType(
      someMovementTypeId,
      movementTypeInput
    );

    expect(movementTypeServiceMock.updateMovementType).toBeCalledWith(
      someMovementTypeId,
      movementTypeInput
    );
  });

  test("Should call deleteMovementType method", async () => {
    const someMovementTypeId = 1;
    movementTypeServiceMock.deleteMovementType.mockResolvedValueOnce({});

    await movementTypeResolver.deleteMovementType(someMovementTypeId);

    expect(movementTypeServiceMock.deleteMovementType).toBeCalledWith(
      someMovementTypeId
    );
  });
});
