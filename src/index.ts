// @see https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_elevation-theme.scss

const penumbra = [
  "0px 1px 1px 0px",
  "0px 2px 2px 0px",
  "0px 3px 4px 0px",
  "0px 4px 5px 0px",
  "0px 5px 8px 0px",
  "0px 6px 10px 0px",
  "0px 7px 10px 1px",
  "0px 8px 10px 1px",
  "0px 9px 12px 1px",
  "0px 10px 14px 1px",
  "0px 11px 15px 1px",
  "0px 12px 17px 2px",
  "0px 13px 19px 2px",
  "0px 14px 21px 2px",
  "0px 15px 22px 2px",
  "0px 16px 24px 2px",
  "0px 17px 26px 2px",
  "0px 18px 28px 2px",
  "0px 19px 29px 2px",
  "0px 20px 31px 3px",
  "0px 21px 33px 3px",
  "0px 22px 35px 3px",
  "0px 23px 36px 3px",
  "0px 24px 38px 3px",
];

type Depth =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

function parseShadow(raw: string) {
  const [x, y, blur] = raw
    .split(" ")
    .map((val) => parseInt(val.replace("px", ""), 10));

  return {
    x,
    y,
    blur,
  };
}

function interpolate(i: number, a: number, b: number, a2: number, b2: number) {
  return ((i - a) * (b2 - a2)) / (b - a) + a2;
}

function getShadow(depth: Depth) {
  const shadow = parseShadow(penumbra[depth - 1]);
  const height = shadow.y === 1 ? 1 : Math.floor(shadow.y * 0.5);

  return {
    shadowOffset: {
      width: 0,
      height,
    },
    shadowOpacity: parseFloat(interpolate(depth, 1, 24, 0.2, 0.6).toFixed(2)),
    shadowRadius: parseFloat(interpolate(shadow.blur, 1, 38, 1, 16).toFixed(2)),
    elevation: depth,
  };
}

export default getShadow;
