import getShadow from "../index";

it("shadow depth 1", () => {
  const shadow = getShadow(1);
  expect(shadow).toEqual({
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.0,
    elevation: 1,
  });
});

it("shadow depth 11", () => {
  const shadow = getShadow(11);
  expect(shadow).toEqual({
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.37,
    shadowRadius: 6.68,
    elevation: 11,
  });
});

it("shadow depth 24", () => {
  const shadow = getShadow(24);
  expect(shadow).toEqual({
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16.0,
    elevation: 24,
  });
});
