import { createStore } from 'vuex'

export default createStore({
  state: {
    tableData: [
        {
          assetID: "V001",
          assetName: "Delivery Van",
          category: "Vehicle",
          status: "Active",
          modelNumber: "VD2000",
          serialNumber: "SN1234567890",
          description: "Ford Transit 2021",
          purchaseCost: 450000000,
          purchaseDate: "2021-06-15",
          vendorName: "Ford Motors"
        },
        {
          assetID: "V002",
          assetName: "Forklift Truck",
          category: "Vehicle",
          status: "Inactive",
          modelNumber: "FT400",
          serialNumber: "SN9876543210",
          description: "Toyota Forklift 2020",
          purchaseCost: 375000000,
          purchaseDate: "2020-10-22",
          vendorName: "Toyota Industries"
        },
        {
          assetID: "T001",
          assetName: "Heavy-Duty Tire",
          category: "Tire",
          status: "Active",
          modelNumber: "HT500",
          serialNumber: "SN5678901234",
          description: "Bridgestone Mud Terrain",
          purchaseCost: 5000000,
          purchaseDate: "2023-03-05",
          vendorName: "Bridgestone Tires"
        },
        {
          assetID: "T002",
          assetName: "All-Season Tire Set",
          category: "Tire",
          status: "Active",
          modelNumber: "AS400",
          serialNumber: "SN2345678901",
          description: "Michelin CrossClimate+",
          purchaseCost: 6750000,
          purchaseDate: "2022-08-12",
          vendorName: "Michelin Tires"
        },
        {
          assetID: "V003",
          assetName: "SUV",
          category: "Vehicle",
          status: "Active",
          modelNumber: "SUV2022",
          serialNumber: "SN1122334455",
          description: "Honda CR-V 2022",
          purchaseCost: 520000000,
          purchaseDate: "2022-04-30",
          vendorName: "Honda Motors"
        },
        {
          assetID: "V004",
          assetName: "Truck",
          category: "Vehicle",
          status: "in Repair",
          modelNumber: "TRK3000",
          serialNumber: "SN9988776655",
          description: "Isuzu NPR Truck",
          purchaseCost: 820000000,
          purchaseDate: "2023-01-10",
          vendorName: "Isuzu Motors"
        },
        {
          assetID: "T003",
          assetName: "Performance Tire",
          category: "Tire",
          status: "Active",
          modelNumber: "PT700",
          serialNumber: "SN8765432109",
          description: "Goodyear Eagle F1",
          purchaseCost: 8000000,
          purchaseDate: "2021-11-25",
          vendorName: "Goodyear Tires"
        },
        {
          assetID: "T004",
          assetName: "Winter Tire Set",
          category: "Tire",
          status: "Active",
          modelNumber: "WT300",
          serialNumber: "SN5432109876",
          description: "Pirelli Winter Sottozero",
          purchaseCost: 6000000,
          purchaseDate: "2023-06-18",
          vendorName: "Pirelli Tires"
        }
    ]
  },
  mutations: {
    setTableData (state, obj){
      state.tableData = obj;
    },
  },
  actions: {
  },
  modules: {
  }
})
