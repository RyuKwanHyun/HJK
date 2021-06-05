import React, { useState } from "react";
import "./CodeView.css";

const CodeView = () => {
    return (

        <div className="code_head" >
            
            <a className="code_link" href="https://github.com/RyuKwanHyun/HJK/tree/main">CODE VIEW</a>

            <div className="code_text-box">
                <div className="code_contents">
                    소스를 열람해보시고 사용하실 분은 사용하세요.
                </div>
                <div className="code_contents2">
                    부족한 부분이나 지적도 환영입니다. ^__^
                </div>
            </div>

        </div>

    );
};
export default CodeView;