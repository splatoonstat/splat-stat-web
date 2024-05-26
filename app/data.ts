import outputData from "@/app/_data/output_data.json";

type BinData = {
  bin: string;
  mean: number;
  std: number;
  samples: number;
  ci: number;
};

type ModeData = {
  id: string;
  data: BinData[];
};

type AbilityData = {
  id: string;
  modes: ModeData[];
};

type WeaponData = {
  id: string;
  samples: number;
  generalAbilities: AbilityData[];
  primaryAbilities: AbilityData[];
};

type AbilityPointAverage = {
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

type WeaponTypeMaster = {
  id: string;
  name: string;
};

type ModeMaster = {
  id: string;
  name: string;
};

type WeaponMaster = {
  id: string;
  name: string;
  typeId: string;
};

type AbilityMaster = {
  id: string;
  name: string;
};

type Master = {
  weaponTypes: WeaponTypeMaster[];
  modes: ModeMaster[];
  weapons: WeaponMaster[];
  generalAbilities: AbilityMaster[];
  primaryAbilities: AbilityMaster[];
};

type Data = {
  updatedAt: string;
  master: Master;
  abilityPointAverage: AbilityPointAverage;
};

export const data = outputData as Data;
