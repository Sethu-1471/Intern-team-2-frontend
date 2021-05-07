import React, { useState, useEffect } from "react";
import { getCoursebyId } from "../../../api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import SubModule from "./SubMoudles";
import SplitPane, { Pane } from "react-split-pane";
import "../../CourseCreate/splitpane.css";
import "./certificate.css"

export default function MainPageTwo() {
  let { id } = useParams();
  const [course, setCourse] = useState();
  const [dialogShow, setDialogShow] = useState(false);
  const [modulename, setModulename] = useState();

  useEffect(() => {
    getCoursebyId(id, true).then((res) => {
      console.log(res.data);
      if (res.data.status) {
        setCourse(res.data.course);
      } else {
        toast(res.data.message);
      }
    });
  }, []);

  const handledownloadCertificate = () => {
    var domtoimage = require("dom-to-image");
    domtoimage
      .toBlob(document.getElementById("my-node"))
      .then((blob) => {
        var FileSaver = require('file-saver');
        FileSaver.saveAs(blob,`${JSON.parse(localStorage.getItem("user")).name + `-` + course.name}.png`);
      });
  }


  if (!course) return null;
  return (
    <div>
      <SplitPane split="vertical" minSize="40%">
        <div style={{ padding: "20px" }}>
          <img
            src={`${window.hostname}/images/${course.image}`}
            width="100%"
            height="300px"
            style={{ padding: "1px" }}
          />
          <h4> {course.name} </h4>
          <p>Description - {course.description} </p>
          <p>
            Certificate -{" "}
            {course.certificate
              ? <Button onClick={() => handledownloadCertificate()} >Download</Button>
              : "Not Available"}
          </p>
          
          <p>Instructor - {course.staffId.name} </p>
          <p>Instructor email id - {course.staffId.email} </p>
          <p>You can reach him/her by mail</p>
        </div>
        <div>
          {course.subModule[0] ? (
            <SubModule content={course.subModule} />
          ) : (
            <div style={{ padding: "20px 20px" }}>
              <h5>No Sub Module Available</h5>
            </div>
          )}
        </div>
      </SplitPane>
      {/* <!-- //certiy --> */}
    <div class="mm">
    <div class="massContainer" id="my-node">
      <div class="container pm-certificate-container">
        <div class="outer-border"></div>
        <div class="inner-border"></div>

        <div class="pm-certificate-border col-xs-12">
          <div class="row pm-certificate-header">
            <div class="pm-certificate-title cursive col-xs-12 text-center" style={{width: "700px"}}>
              <center><h2>Certificate of Completion</h2></center>
            </div>
          </div>

          <div class="row pm-certificate-body">
            <div class="pm-certificate-block">
              <div class="col-xs-12">
                <div class="row">
                  <div class="col-xs-2"></div>
                  <div
                    class="pm-certificate-name underline margin-0 col-xs-8 text-center" style={{width: "700px"}}
                  >
                    <center><span class="pm-name-text bold"
                      > { JSON.parse(localStorage.getItem("user")).name } </span></center>
                  </div>
                  <div class="col-xs-2"></div>
                </div>
              </div>

              <div class="col-xs-12">
                <div class="row">
                  <div class="col-xs-2"></div>
                  <div class="pm-earned col-xs-8 text-center" style={{width: "700px"}}>
                    <center class="pm-earned-text padding-0 block cursive"
                      >has earned a completion certificate for the{course.name} course on <span  style={{ fontSize: "12px" }}>{new Date().toLocaleString()} </span>  </center>
                    <span class="pm-credits-text block bold sans" style={{ marginTop: "25px" }}
                      >Credits: co-tutor</span>
                  </div>
                  <div class="col-xs-2"></div>
                  <div class="col-xs-12"></div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
     </div>
    </div>
  );
}
