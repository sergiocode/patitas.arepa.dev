import React from 'react';
import moment from 'moment';

const PetItem = props => {
    moment.locale('es');
    const date = moment(props.pet.date, "YYYYMMDD").fromNow();

    return (
        <div className="Pets">
            <div 
                className="Pets-cover"
                style={{
                    background: `url('${props.pet.photo}')`
                }}
            >
                <span>
                    {props.pet.type === 'dog' && 'P'}
                    {props.pet.type === 'cat' && 'G'}
                </span>
                {props.pet.adopt &&
                    <div className="Pets-type">
                        Adopcion
                    </div>
                }
                
            </div>
            <div className="Pets-content">
                <div className="Pets-head">
                    <h2>{props.pet.name}</h2>
                    <i>
                        {props.pet.gender === 'male' && 'M'}
                        {props.pet.gender === 'famale' && 'F'}
                    </i>
                </div>
                <p>{props.pet.description}</p>
                <div className="Pest-date">
                    <i className="fas fa-calendar-alt"></i>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
}

export default PetItem;