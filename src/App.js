import './sass/App.scss';
import logo from "./images/img1.png"
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { GoKebabVertical } from 'react-icons/go'
import { AiOutlineHeart } from 'react-icons/ai'


function App() {
  return (
    <div className="container-xl">
      <div className="row header px-5 shadow">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand fs-2 text-white" href="#">K. Griffith</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#appearances">APPEARANCES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#books">BOOKS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#news">NEWS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="main row">
        <div className="social-icons">
          <a href="#">
            <AiFillTwitterCircle className='twitter-icon icon' />
          </a>
          <a href="#" className='a-2'>
            <FaFacebook className='facebook-icon icon' />
          </a>
        </div>

        <div className="author">
          <div className="author-text col-12 d-flex justify-content-end align-items-center">
            <div className="row w-50">
              <p className='p-1'>Kayla Griffith</p>
              <p className='p-2'>Award Winning Author</p>
            </div>
          </div>
          <div className="author-img col-12">
            <img src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_298,h_329,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" alt="" />
          </div>
        </div>

        <div className="swan-isle row" id='books'>
          <div className="swan-isle-text col-7">
            <div className="new">
              <div className="text">
                <p>New Release</p>
              </div>
              <div className="triagle"></div>
            </div>
            <div className="text-content">
              <p className='p-1'>The Swan Isle</p>
              <p className='p-2'>( <sub>2023</sub> )</p>
              <p className='p-3'>
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
              </p>
              <p className='p-4'>Order Now</p>
            </div>
            <div className="buttons">
              <button className="btn">Amazon</button>
              <button className="btn">Google</button>
              <button className="btn">ibooks</button>
            </div>
          </div>
          <div className="swan-isle-img col-5">
            <img src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_481,h_679,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png" alt="" />
          </div>
        </div>

        <div className="swan-isle row mt-5">
          <div className="swan-isle-text col-7">
            <div className="new">
              <div className="text">
                <p>New Release</p>
              </div>
              <div className="triagle"></div>
            </div>
            <div className="text-content">
              <p className='p-1'>The Tempest</p>
              <p className='p-2'>( <sub>2023</sub> )</p>
              <p className='p-3'>
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
              </p>
              <p className='p-4'>Order Now</p>
            </div>
            <div className="buttons">
              <button className="btn">Amazon</button>
              <button className="btn">Google</button>
              <button className="btn">ibooks</button>
            </div>
          </div>
          <div className="swan-isle-img col-5">
            <img src="https://static.wixstatic.com/media/ad420a_f097c45c709f49209825dc394ac89e68~mv2.jpg/v1/fill/w_395,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Apple%20TV%20Copy%2063.jpg" alt="" />
          </div>
        </div>

        <div className="praise row">
          <div className="flag">
            <div className="triagle"></div>
          </div>
          <p>Praise & Reviews</p>
          <div className="col-4">
            <div className="row">
              <img src={logo} alt="" />
            </div>
            <p className='p-1'>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <p className='p-2'>‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
            <hr></hr>
          </div>
          <div className="col-4">
            <div className="row">
              <img src={logo} alt="" />
            </div>
            <p className='p-1'>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <p className='p-2'>‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
            <hr></hr>
          </div>
          <div className="col-4">
            <div className="row">
              <img src={logo} alt="" />
            </div>
            <p className='p-1'>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <p className='p-2'>‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
            <hr id='appearances'></hr>
          </div>
        </div>

        <div className="cards row">
          <div className="card-text">
            <h1 className='text-center'>See Upcoming Appearances</h1>
            <p className='text-center'>I'm a paragraph. Click here to add your own text and edit me. It's easy</p>
          </div>
          <div className="card mt-5">
            <div className="card-body">
              <h4 className='text-center text-white'>
                January 18th 2023, The Breakfast Club, Virtual Book Reading <br /> <br /> of Swan Isle, 7PM - 8PM EST
              </h4>
              <button className='btn'>Join</button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className='text-center text-white'>
                January 18th 2023, The Breakfast Club, Virtual Book Reading <br /> <br /> of Swan Isle, 7PM - 8PM EST
              </h4>
              <button className='btn'>Join</button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className='text-center text-white'>
                January 18th 2023, The Breakfast Club, Virtual Book Reading <br /> <br /> of Swan Isle, 7PM - 8PM EST
              </h4>
              <button className='btn' id='news'>Join</button>
            </div>
          </div>
        </div>

        <div className="news row">
          <div className="col-6 cl-1">
            <img src="https://static.wixstatic.com/media/ad420a_37844e8fac7a4460b030bab95edd8b17~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/ad420a_37844e8fac7a4460b030bab95edd8b17~mv2.jpg" alt="" />
          </div>
          <div className="col-6 cl-2">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-2">
                    <FaUserCircle className='user-icon'/>
                  </div>
                  <div className="col-9">
                    <p>Admin</p>
                    <p>Dec 5, 2021 - 1 min</p>
                  </div>
                  <div className="col-1">
                    <GoKebabVertical className='kebab-icon'/>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h2>Griffith signs a book deal with Flix.Me</h2>
                <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
              </div>
              <div className="card-footer">
                <p>0 views 0 comments</p>
                <span>4 <AiOutlineHeart className='heart-icon'/></span>
              </div>
            </div>
          </div>
        </div>
        <div className="news row mt-4">
          <div className="col-6 cl-1">
            <img src="https://static.wixstatic.com/media/ad420a_8018cec2085b44faa899a7beb761fb1b~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/ad420a_8018cec2085b44faa899a7beb761fb1b~mv2.webp" alt="" />
          </div>
          <div className="col-6 cl-2">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-2">
                    <FaUserCircle className='user-icon'/>
                  </div>
                  <div className="col-9">
                    <p>Admin</p>
                    <p>Dec 5, 2021 - 1 min</p>
                  </div>
                  <div className="col-1">
                    <GoKebabVertical className='kebab-icon'/>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h2>Writing women stories</h2>
                <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
              </div>
              <div className="card-footer">
                <p>0 views 0 comments</p>
                <span id='about'>5 <AiOutlineHeart className='heart-icon'/></span>
              </div>
            </div>
          </div>
        </div>

        <div className="mini-about row">
          <div className="flag">
            <div className="triagle"></div>
          </div>
          <div className="img">
            <img src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_221,h_221,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg" alt="" />
          </div>
          <div className="text">
            <h1 className='text-center my-5'>About Kayla Griffith</h1>
            <p className='text-center'>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
          <button id='contact' className='btn my-5'>Read More</button>
        </div>

        <div className="contact row">
          <h1 className='text-center'>For all inquiries contact</h1>
          <p className='text-center text-white mt-4'>info@mysite.com</p>
          <p className='text-center text-white'>1234-5678</p>
          <div className="col-6">
          <label htmlFor="input">First Name</label>
            <input type="text" id='input'/>
          </div>
          <div className="col-6">
          <label htmlFor="input">Last Name</label>
            <input type="text" id='input'/>
          </div>
          <div className="col-6">
          <label htmlFor="input">Email</label>
            <input type="text" id='input'/>
          </div>
          <div className="col-6">
          <label htmlFor="input">Phone</label>
            <input type="text" id='input'/>
          </div>
          <div className="col-12">
            <label htmlFor="textarea">Type your message here...</label>
            <textarea id="textarea"></textarea>
            <button className='btn'>Submit</button>
          </div>
        </div>
      </div>

      <div className="footer row">
        <p className='text-center mt-2'>© 2023 by K.Griffith. Proudly created with <a href="#">Wix.com</a></p>
      </div>
    </div>
  );
}

export default App;
