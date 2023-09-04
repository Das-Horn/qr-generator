/* eslint-disable @next/next/no-img-element */
import { Container, TextField, Button, FormControl, InputLabel, IconButton, Select, MenuItem, Alert, Slider, Stack, Grow} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
            open: false,
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
                ErrorMsg : "QR Code created 😊",
                severity : "success",
                open : true,
            });
        }
        catch {
            this.setState({
                ErrorMsg : "There was an erorr creating the QR Code try increasing the Size, or lowering the Error Correction Level. 😕 ",
                severity : "error",
                open : true,
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
            <Stack spacing={2} direction="row" alignItems="center">
                <p id="demo-simple-select-label">size:</p>
                <Slider id="type-select" defaultValue={1} step={1} min={1} max={40} valueLabelDisplay="auto" marks />
            </Stack>
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
            <Grow mountOnEnter unmountOnExit in={this.state.open}>
                <Alert className={css`
                    width : 60%;
                `} severity={this.state.severity}  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        this.setState({
                            open : false
                        });
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }>
                    {this.state.ErrorMsg}
                </Alert>
            </Grow>
            <img className={css`
                width:60%;
            `}
            src={this.state.QRImage !== "" ? this.state.QRImage : ""} alt="QR Code" />
        </Container>
      );
    }
  }

export default QRC;