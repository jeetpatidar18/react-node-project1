import React, { useState } from 'react';
import axios from 'axios';

export function ManageBook() {
  const [bcode, setBCode] = useState();
  const [bname, setBName] = useState();
  const [bprice, setBPrice] = useState();
  const [mylist, setMyList] = useState([]);


  const handleBCodeText = (evt) => {
    setBCode(evt.target.value);
  }
  const handleBNameText = (evt) => {
    setBName(evt.target.value);
  }
  const handleBPriceText = (evt) => {
    setBPrice(evt.target.value);
  }

  const handleButtonClick = (evt) => {
    if (evt.target.name === "btnsave") {
      //call API
      var obj = {
        bcode: bcode,
        bname: bname,
        bprice: bprice
      }
      axios.post("http://localhost:5550/book/save", obj).then(
        res => {
          alert("Data Saved");
        }
      )
        .catch(err => {
          alert("Something Went Wrong");
        });
    }
    else if (evt.target.name === "btnsearch") {
      var scode = bcode;
      axios.get('http://localhost:5550/book/search/' + scode).then
        (
          res => {
            if (res.data != null) {
              alert("Data Found");
              setBCode(res.data.bcode);
              setBName(res.data.bname);
              setBPrice(res.data.bprice)
            }
            else {
              alert("data Not found");
            }
          }
        ).catch(err => {
          alert("Something Went Wrong");
        });
    }
    else if (evt.target.name === "btnupdate") {

      axios.get('http://localhost:5550/book/editbook/' + bcode + "/" + bname + "/" + bprice)
        .then(res => {
          if (res.status === 200) {
            alert("Data Updated");
          }
          else {
            alert("Data Not Updated");
          }

        }).catch(err => {
          alert("Something Went Wrong")
        });
    }
    else if (evt.target.name === "btndelete") {
      var dcode = bcode;

      axios.get('http://localhost:5550/book/deletebook/' + bcode).then(res => {
        if (res.status == 200) {
          alert("Data Deleted");
        } else {
          alert("Data Not Deleted")
        }
      }).catch(err => {
        alert("Something Went Wrong");
      });
    }
    else if (evt.target.name === "btnshow") {
      //Call show All API
      axios.get("http://localhost:5550/book/showAll/").then(
        res => {
          if (res.data != null) {
            setMyList(res.data);
          }
          else {
            alert("Data not Found");
          }
        }
      ).catch(err => {
        alert("something went wrong");
      });
    }
    else if (evt.target.name === "btnclear") {
      setBCode("")
      setBName("")
      setBPrice("");
      setMyList([])
    }
  }
  return (
    <>
      <div style={{ marginTop: "40px" }} id='books'>
        <center>
          <h1 id='h1'>Student Library</h1>
          <table className='t1'>
            <tr>
              <td >Book Code</td>
              <td>
                <input type='number' onChange={handleBCodeText} />
              </td>
            </tr>
            <tr>
              <td >Book Name</td>
              <td>
                <input type='text' onChange={handleBNameText} value={bname} />
              </td>
            </tr>
            <tr>
              <td>Book Price</td>
              <td>
                <input type='number' onChange={handleBPriceText} value={bprice} />
              </td>
            </tr>
            <tr>
              <td  >
                <button id='btn' type='submit' name='btnsave' onClick={handleButtonClick}>Save</button>
                <span>   </span>
                <button id='btn' type='submit' name='btnsearch' onClick={handleButtonClick}>Search</button>
              </td>

              <td>
                <button id='btn' type='submit' name='btnupdate' onClick={handleButtonClick}>Update</button>
                <span>  </span>
                <button id='btn' type='submit' name='btndelete' onClick={handleButtonClick}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <button id='btn' type="submit" name="btnshow"
                  onClick={handleButtonClick}>Show All</button>
                <span>      </span>
                <button id='btn' type='submit' name='btnclear' onClick={handleButtonClick}>Clear</button>

              </td>
              <br></br>
              <br></br>
            </tr>
          </table>
          <table border="3">
            <th>Book Code</th>
            <span>  </span>
            <th>Book Name</th>
            <span>  </span>
            <th>Book Price</th>
            {
              mylist.map((item) => (
                <tr>
                  <td>{item.bcode}</td>
                  <span>  </span>
                  <td>{item.bname}</td>
                  <span>  </span>
                  <td>{item.bprice}</td>
                </tr>
              ))
            }

          </table>
        </center>

      </div>
    </>
  );
}
