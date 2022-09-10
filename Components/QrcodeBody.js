/* eslint-disable @next/next/no-img-element */
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, Alert, AlertTitle} from '@mui/material';
import React from 'react';
import { css, cx } from '@emotion/css';
import qrcode from "qrcode-generator";

class QRC extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            QRText : "",
            QRImage : "",
            TypeNumber : 4,
            ErrorCorrectionLevel : "L",
            ErrorMsg : "",
            severity : "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeError = this.handleChangeError.bind(this);
        this.generate_qr_code = this.generate_qr_code.bind(this);
        this.setDefaults = this.setDefaults.bind(this);
    }

    generate_qr_code() {
        try {
            let qr = qrcode(this.state.TypeNumber, this.state.ErrorCorrectionLevel);
            let QRText = document.querySelector("#QRText").value;
            console.log(QRText);
            qr.addData(QRText);
            qr.make();
            this.setState({
                QRImage : qr.createDataURL(),
                ErrorMsg : "QR Code created ╚(•⌂•)╝",
                severity : "success",
            });
        }
        catch {
            this.setState({
                ErrorMsg : "There was an erorr creating the QR Code try increasing the Type",
                severity : "error",
            });
        }
    }

    async handleChange(event) {
        this.setState({
            TypeNumber : event.target.value,
        });
        // console.log(`Current Type Number is = ${this.state.TypeNumber}`)
    }

    async handleChangeError(event) {
        this.setState({
            ErrorCorrectionLevel : event.target.value,
        });
        // console.log(`Current Type Number is = ${this.state.TypeNumber}`)
    }

    setDefaults(){
        this.setState({
            QRText : "",
            QRImage : "",
            TypeNumber : 4,
            ErrorCorrectionLevel : "L"
        })
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    render() {
      return(
        <Container className={css`
            display:flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: flex-start;
            align-items: center;
        `}>
            <TextField id='QRText' className={css`
                width : 60%;
                margin : 5px;
            `} placeholder='Data / Link' />

            <FormControl className={css`
                width:60%;
                margin : 4px;
            `}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="type-select"
                value={this.state.TypeNumber}
                label="Type"
                onChange={this.handleChange}
            >
                <MenuItem value={1} >1</MenuItem>
                <MenuItem value={2} >2</MenuItem>
                <MenuItem value={3} >3</MenuItem>
                <MenuItem value={4} >4</MenuItem>
                <MenuItem value={5} >5</MenuItem>
                <MenuItem value={6} >6</MenuItem>
                <MenuItem value={7} >7</MenuItem>
                <MenuItem value={8} >8</MenuItem>
                <MenuItem value={9} >9</MenuItem>
                <MenuItem value={10} >10</MenuItem>
                <MenuItem value={11} >11</MenuItem>
                <MenuItem value={12} >12</MenuItem>
                <MenuItem value={13} >13</MenuItem>
                <MenuItem value={14} >14</MenuItem>
                <MenuItem value={15} >15</MenuItem>
                <MenuItem value={16} >16</MenuItem>
                <MenuItem value={17} >17</MenuItem>
                <MenuItem value={18} >18</MenuItem>
                <MenuItem value={19} >19</MenuItem>
                <MenuItem value={20} >20</MenuItem>
                <MenuItem value={21} >21</MenuItem>
                <MenuItem value={22} >22</MenuItem>
                <MenuItem value={23} >23</MenuItem>
                <MenuItem value={24} >24</MenuItem>
                <MenuItem value={25} >25</MenuItem>
                <MenuItem value={26} >26</MenuItem>
                <MenuItem value={27} >27</MenuItem>
                <MenuItem value={28} >28</MenuItem>
                <MenuItem value={29} >29</MenuItem>
                <MenuItem value={30} >30</MenuItem>
                <MenuItem value={31} >31</MenuItem>
                <MenuItem value={32} >32</MenuItem>
                <MenuItem value={33} >33</MenuItem>
                <MenuItem value={34} >34</MenuItem>
                <MenuItem value={35} >35</MenuItem>
                <MenuItem value={36} >36</MenuItem>
                <MenuItem value={37} >37</MenuItem>
                <MenuItem value={38} >38</MenuItem>
                <MenuItem value={39} >39</MenuItem>
                <MenuItem value={40} >40</MenuItem>
            </Select>
            </FormControl>

            <FormControl className={css`
                width:60%;
                margin : 4px;
            `}>
            <InputLabel id="demo-simple-select-label">Error Correction Level</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="type-select"
                value={this.state.ErrorCorrectionLevel}
                label="Error Correction Level"
                onChange={this.handleChangeError}
            >
                <MenuItem value={"L"} >L</MenuItem>
                <MenuItem value={"M"} >M</MenuItem>
                <MenuItem value={"Q"} >Q</MenuItem>
                <MenuItem value={"H"} >H</MenuItem>
            </Select>
            </FormControl>
            <Container className={css`
                display:flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-content: center;
                justify-content: space-around;
                align-items: center;
            `}>
                <Button onClick={this.setDefaults}>Clear</Button>
                <Button onClick={this.generate_qr_code}>Submit</Button>
            </Container>
            <Alert className={css`
                display : ${this.state.severity !== "" ? "block" : "hidden" };
                width : 60%;
            `} severity={this.state.severity}>
                {this.state.ErrorMsg}
            </Alert>
            <img className={css`
                width:60%;
            `}
            src={this.state.QRImage !== "" ? this.state.QRImage : ""} alt="QR Code" />
        </Container>
      );
    }
  }

export default QRC;