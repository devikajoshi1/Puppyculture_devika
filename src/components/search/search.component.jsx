import Search from '../../assets/search-icon.svg';
// import './search.styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const  SearchIcon=()=> {
    return (
        <div class="search-form">
       
        <input type="search" class="search-input" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  />
       
        <span class="input-group-text border-0" id="search-addon">
            <button className='search-button'><img src={Search} /> </button>
        </span>
        
        </div>

    );
  };
  

export default SearchIcon;



// import Search from '../../assets/search-icon.svg';
// // import './search.styles.scss';
// import React from 'react';
// import { Link } from 'react-router-dom';

// const  SearchIcon=()=> {
//     return (
//         <div class="input-group rounded">
       
//         <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  />
       
//         <span class="input-group-text border-0" id="search-addon">
//             <button><img src={Search} /> </button>
//         </span>
        
//         </div>

//     );
//   };
  

// export default SearchIcon;
