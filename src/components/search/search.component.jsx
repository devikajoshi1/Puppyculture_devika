import Search from '../../assets/search-icon.svg';

import React from 'react';
const  SearchIcon=()=> {

    return (
        <form >
            <input type="text" placeholder="Search..."/>
            <button type="submit"><img src={Search} /></button>
        </form>
    );
}



export default SearchIcon;



// import React from 'react';

// import Search from '../../assets/search-icon.svg';
 
// const SearchIcon = () => {
//   return (
//     <div>
//       <img src={Search} />

//     </div>
//   );
// }

// export default SearchIcon;