interface ISpacexData {
  flight_number: number;
  mission_name: string;
  status: string;
  launch_year: string;
  rocket: { rocket_id: string; orbit: string };
  launch_site: { site_name: string };
  cost: number;
}

const spacexLaunches: ISpacexData[] = [
  {
    flight_number: 1,
    mission_name: "FalconSat",
    status: "failed",
    launch_year: "2006",
    rocket: { rocket_id: "falcon1", orbit: "LEO" },
    launch_site: { site_name: "Kwajalein Atoll" },
    cost: 1100,
  },
  {
    flight_number: 14,
    mission_name: "CRS-3",
    status: "success",
    launch_year: "2014",
    rocket: { rocket_id: "falcon9", orbit: "ISS" },
    launch_site: { site_name: "CCAFS SLC 40" },
    cost: 900,
  },
  {
    flight_number: 20,
    mission_name: "DISCOVR",
    status: "success",
    launch_year: "2015",
    rocket: { rocket_id: "falcon9", orbit: "ES-L1" },
    launch_site: { site_name: "CCAFS SLC 40" },
    cost: 1800,
  },
  {
    flight_number: 3,
    mission_name: "Trailblazer",
    status: "failed",
    launch_year: "2008",
    rocket: { rocket_id: "falcon1", orbit: "LEO" },
    launch_site: { site_name: "Kwajalein Atoll" },
    cost: 1000,
  },
];

exports = spacexLaunches;
