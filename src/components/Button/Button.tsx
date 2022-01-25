import { type } from "os";
import React from "react";
import  './Button.css'

type ColorType = 'Primary' | 'Secondary' | 'Success' | 'Primary' | 'Danger' | 'Warning' | 'Info' | 'Light' | 'Dark';
type SizeType = 'Large' | 'Small' | 'Block';

interface IBtn{
    color? : ColorType;
    size? : SizeType ;
    bgColor? : string;
}
export const Button : React.FC<IBtn> = (props) => {
const {color, children, size, bgColor} = props;


let styles : React.CSSProperties  = {};

switch (color) {
    case 'Primary': {
        styles.color = '#fff';
        styles.backgroundColor = '#007bff';
        styles.borderColor = '#007bff';
        break;
    }
    case 'Secondary': {
        styles.color = '#fff';
        styles.backgroundColor = '#6c757d';
        styles.borderColor = '#6c757d';
        break;
    }
    case 'Success': {
        styles.color = '#fff';
        styles.backgroundColor = '#28a745';
        styles.borderColor = '#28a745';
        break;
    }
    case 'Danger': {
        styles.color = '#fff';
        styles.backgroundColor = '#dc3545';
        styles.borderColor = '#dc3545';
        break;
    }
    case 'Warning': {
        styles.color = '#212529';
        styles.backgroundColor = '#ffc107';
        styles.borderColor = '#ffc107';
        break;
    }
    case 'Info': {
        styles.color = '#fff';
        styles.backgroundColor = '#17a2b8';
        styles.borderColor = '#17a2b8';
        break;
    }
    case 'Light': {
        styles.color = '#212529';
        styles.backgroundColor = '#f8f9fa';
        styles.borderColor = '#f8f9fa';
        break;
    }
    case 'Dark': {
        styles.color = '#fff';
        styles.backgroundColor = '#343a40';
        styles.borderColor = '#343a40';
        break;
    }
    default : styles.color = 'black';
}

switch(size){
    case 'Block': {
        styles.width = '100%';
        styles.display = 'block';
        styles.padding = '0.5rem 1rem'; 
        styles.fontSize = '1.25rem';
        styles.border = '0.3rem';break;

    }

    case 'Large':  {
        styles.padding = '0.5rem 1rem'; 
        styles.fontSize = '1.25rem';
        styles.border = '0.3rem';break;
    }


    case 'Small':  {
        styles.padding = '0.25rem 0.5rem'; 
        styles.fontSize = '0.75rem';
        styles.border = '0.2rem';break;
    }
    default :  {
        styles.padding = '0.25rem 0.5rem'; 
        styles.fontSize = '0.75rem';
        styles.border = '0.2rem';break;

    }
}




return(
            <button style={styles}> {children} </button>
      
    )
    
}