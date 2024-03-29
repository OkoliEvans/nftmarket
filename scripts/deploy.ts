import { ethers } from "hardhat";

async function main() {
  const [ owner ] = await ethers.getSigners();

  const MarketPlace = await ethers.getContractFactory("NFTMarketplace");
  const marketplace = await MarketPlace.deploy();
  await marketplace.deployed()
  const marketplaceAddress = marketplace.address;

  console.log(`NFT market deployed to: ${marketplaceAddress}`);

  // 0xf3cbCFE00a258d1A8F3950dfB353111D3F65d031

  ////////////////  NFT TOKEN  /////////////////
  const NFT = await ethers.getContractFactory("NFT");
  const Nft = await NFT.deploy(marketplaceAddress);
  await Nft.deployed();
  const NftAddr = Nft.address;
  console.log(`Nft deployed to: ${NftAddr}`);
  
  // 0xae8c16c60ED69ba3528D8a4B745568938ae0629b
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
