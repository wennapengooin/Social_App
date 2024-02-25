import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
              />
              <span>Johnny</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8639801/pexels-photo-8639801.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
              />
              <p>
                <span>Freddy</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <p>
                <span>Massin</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14941550/pexels-photo-14941550.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <p>
                <span>Hossain</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14431490/pexels-photo-14431490.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <p>
                <span>Emily</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="online" />
              <span>Matt</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14941551/pexels-photo-14941551.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="online" />
              <span>Eric</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="online" />
              <span>YourFavouriteBob</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="online" />
              <span>Chris</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="online" />
              <span>Michelle</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/977878/pexels-photo-977878.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="online" />
              <span>IlOVeCoFfeE</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="online" />
              <span>Your Fav Coffee</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="online" />
              <span>zshery</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="online" />
              <span>Sutms</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8639801/pexels-photo-8639801.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Fred</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
