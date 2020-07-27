class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                .footer{
                    width:100%;
                    text-align:center;
                    font-size:14px;
                    padding:40px 0;
                    background-color: #353b48;
                    color: #2DC2A4;
                }

                .footer a {
                    color:gold;
                    text-decoration: none;
                }

                @media screen and (max-width: 600px){
                    .footer{
                        font-size: 12px;
                    }
                }
            </style>
            <div 
                class="footer">Submission Dicoding.com © 2020 <a href="https://github.com/CopyCoding25?tab=repositories"><span> Mohammad Agung</span></a>
            </div>
        `;
    }
}

customElements.define("my-footer", MyFooter);