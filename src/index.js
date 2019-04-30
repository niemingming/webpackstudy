import _ from 'lodash';
import './index.css';
import time from './time.jpg';

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello','webpack'],' ');
    element.classList.add('fontcolor');
    var image = new Image();
    image.src = time;
    element.appendChild(image);
    return element;
}

document.body.appendChild(component());
