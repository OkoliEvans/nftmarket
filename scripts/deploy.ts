import { ethers } from "hardhat";

async function main() {
  const [ owner ] = await ethers.getSigners();

  const MarketPlace = await ethers.getContractFactory("NFTMarketplace");
  const marketplace = await MarketPlace.deploy();
  await marketplace.deployed()
  const marketplaceAddress = marketplace.address;

  console.log(marketplaceAddress);
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
