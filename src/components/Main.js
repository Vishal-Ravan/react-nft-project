import React from "react";

const Main = () => {
  const data = [
    {
      id: 1,
      name: "Anyside – Web3 Names",
      rel: "December 7",
      price: "$999 (ETH)",
      size: "100,000",
      para: "Anyside is a cross-blockchain utility NFT",
      img: "https://nftprojectlist.com/wp-content/uploads/2022/12/57A3BXJL_400x400-300x300.jpg",
    },

    {
      id: 2,
      name: "De Sunny Gang",
      rel: "December 7",
      price: "0.77 SOL",
      size: " 7,777",
      para: "We are the Hub of the Digital Wearable Art",
      img: "https://nftprojectlist.com/wp-content/uploads/2022/12/6JDiMx3M_400x400-300x300.jpg",
    },
    {
      id: 1,
      name: "Anyside – Web3 Names",
      rel: "December 7",
      price: "$999 (ETH)",
      size: "100,000",
      para: "Anyside is a cross-blockchain utility NFT",
      img: "https://nftprojectlist.com/wp-content/uploads/2022/12/57A3BXJL_400x400-300x300.jpg",
    },

    {
      id: 2,
      name: "De Sunny Gang",
      rel: "December 7",
      price: "0.77 SOL",
      size: " 7,777",
      para: "We are the Hub of the Digital Wearable Art",
      img: "https://nftprojectlist.com/wp-content/uploads/2022/12/6JDiMx3M_400x400-300x300.jpg",
    },  {
      id: 1,
      name: "Anyside – Web3 Names",
      rel: "December 7",
      price: "$999 (ETH)",
      size: "100,000",
      para: "Anyside is a cross-blockchain utility NFT",
      img: "https://nftprojectlist.com/wp-content/uploads/2022/12/57A3BXJL_400x400-300x300.jpg",
    },

    {
      id: 2,
      name: "De Sunny Gang",
      rel: "December 7",
      price: "0.77 SOL",
      size: " 7,777",
      para: "We are the Hub of the Digital Wearable Art",
      img: "https://nftprojectlist.com/wp-content/uploads/2022/12/6JDiMx3M_400x400-300x300.jpg",
    },
  ];
  return (
    <>
      <div className="main-top">
        <h1>NFT Project List</h1>
        <h6>A simple directory of NFT projects.</h6>
      </div>
      <div className="main-top-wrapper">
        <input type="mail" placeholder="Email Address" />
        <button className="secondary">Sign Up</button>
      </div>
      <div className="main-top-heading-bottom">
        <h5 className="h5">
          Keep up with the latest NFT projects with our weekly email newsletter.
        </h5>
      </div>
      <div className="  main-cards">
        <div className="container-fluid">
          <div className="row main-heading-buttons">
            <h2 className="h2">Recent Projects</h2>
            <div className="col-md-6 col-sm-12 col-xs-12 upcoming ">
              <button className="danger">Upcoming Drops</button>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 allpro">
              <button className="danger">All Projects</button>
            </div>
          </div>
          <div className="container-fluid ">
            <div className=" row ">
              {data.map((user) => (
                <div className="col-md-6 col-sm-12 col-xs-12 ">
                     <div className="cards">
                  <div className="row ">
                 
                    <div className="col-md-4 ">
                      <div className="card-img">
                        <img src={user.img} alt="" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h3>{user.name}</h3>
                      <p>
                        <b> Release date:</b> {user.rel}
                      </p>
                      <p>
                        <b>Mint Price:</b> {user.price}
                      </p>
                      <p>
                        <b>Mint Siz:</b> {user.size}
                      </p>
                      <p>{user.para}</p>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="view-all-project">
            <button className="danger">View All Projects</button>
          </div>
              </div>
      </div>
    </>
  );
};

export default Main;
