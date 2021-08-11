
const hre = require("hardhat");
const fs = require("fs");

async function main() {

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();

  let json={
    local: greeter.address
  }
  json = JSON.stringify(json)
  fs.writeFile('../../web-client/src/contract-artifacts/contracts/Greeter.sol/greeteraddress.json', json, (err)=>{
    if (!err) {
      console.log("address file created")
    } else {
      console.log(err)
      console.log('error file not created')
    }
  })

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
