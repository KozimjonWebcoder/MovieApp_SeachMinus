import React from 'react'
export default class Search extends React.Component{
  state={
    search:''
  }

handleKey=(e)=>{
  if(e.key==='Enter'){
    this.props.searchMovie(this.state.search);
  }
}
  render(){
    return(
        <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="search"
               class="validate" onKeyDown={this.handleKey} onChange={(e)=>this.setState({search:e.target.value})} placeholder="Search" value={this.state.search} />
              <label></label>
             
            </div>
            <button  onClick={()=>this.props.searchMovie(this.state.search)} className='waves-effect waves-light btn-small'>Search</button>
          </div>
        </form>
      </div>
    )
}
}
  
