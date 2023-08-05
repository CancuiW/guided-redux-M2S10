import React from 'react';
import DragonMember from './DragonMember';
import { connect } from 'react-redux';
import { addMember,updateNewMember } from '../actions/dragonListActions';

class DragonList extends React.Component {

  handleClick=()=>{
    this.props.addMember({name:this.props.newMember,dragonStatus:true})


  }
  
  render() {
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.props.newMember}
          onChange={(e)=>{this.props.updateNewMember(e.target.value)}}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    members:state.dragonList.members,
    newMember: state.dragonList.newMember
  }
}

export default connect(mapStateToProps,{addMember,updateNewMember})(DragonList);
