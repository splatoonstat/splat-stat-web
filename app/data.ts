import outputData from "@/app/_data/output_data.json";

export type BinData = {
  bin: string;
  mean: number | null;
  std: number | null;
  samples: number;
  ci: number | null;
};

export type ModeData = {
  id: string;
  data: BinData[];
};

export type AbilityData = {
  id: string;
  modes: ModeData[];
};

export type WeaponData = {
  id: string;
  samples: number;
  generalAbilities: AbilityData[];
  primaryAbilities: AbilityData[];
};

export type AbilityPointAverage = {
  aggregationPeriod: {
    from: string;
    to: string;
  };
  bins: {
    min: number;
    max: number;
    label: string;
  }[];
  weapons: WeaponData[];
};

export type WeaponTypeMaster = {
  id: string;
  name: string;
};

export type ModeMaster = {
  id: string;
  name: string;
};

export type WeaponMaster = {
  id: string;
  name: string;
  typeId: string;
};

export type AbilityMaster = {
  id: string;
  name: string;
};

export type Master = {
  weaponTypes: WeaponTypeMaster[];
  modes: ModeMaster[];
  weapons: WeaponMaster[];
  generalAbilities: AbilityMaster[];
  primaryAbilities: AbilityMaster[];
};

export type Data = {
  updatedAt: string;
  master: Master;
  abilityPointAverage: AbilityPointAverage;
};

export const data = outputData as Data;

export const getWeaponTypeMaster = (id: string) =>
  data.master.weaponTypes.find((type) => type.id === id);

export const getModeMaster = (id: string) =>
  data.master.modes.find((mode) => mode.id === id);

export const getWeaponMaster = (id: string) =>
  data.master.weapons.find((weapon) => weapon.id === id);

export const getAbilityMaster = (id: string) => {
  return (
    data.master.generalAbilities.find((ability) => ability.id === id) ??
    data.master.primaryAbilities.find((ability) => ability.id === id)
  );
};
