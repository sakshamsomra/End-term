import React from "react";
import image from './tri.svg';
import Form from "./Form";


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";


export default function Navbar() {

  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link to = "/home"><img id="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFYElEQVRoge2YW2xUVRSGv316CgUrlBaC0KIFC1VQgnKJeImaaGJSgjExPmhITAwxQoKiIjwoghGJlhgEX4zGmqhRefAKxMuDr0qCUQlE5E5bakpL6dB2OjPn7N+H6ZSWOWcu7bTw0JVMzs46e539/2v9a585G8ZszMZszMZsGGYK8ZAFe1pLbWz8/VbOQ4j7QNUSFSBJnJfRWVkOGmv3jZ805afDT5h4IdaFYRKo/aJ7puP5L0vmWUkTASQA9V1B0pW+Dqz2OEZvHl9d0TSc9WGIBB74VW5rc/cb1mq9pJIcgaO+gQSSugX1trvnnaYXZ0VHjcDCz3qq4vK/RLonCSQMZDDw1NzUGMyfns/Kc2srGkecwIKGrkV+kf1FYmqW7GYFPuhqaEK2rmnN9L9HjMCCTztrPGt+62vOLNlN96XmBlWqb25zPGGWtq2f1pIPASeXSVV7NCFhzbeSKlIgktfBY2vTfalx8t5A/+X7fXGVrmu/qW44VZIPgZwqMO+Tzncl1kMesiBrxkPi6bHSGQOnhd2vmP9128Ybzw2ZwK0NnXM9OCyp+MqFB4PM1g/pJHPcACxGnxvjbWxbX50mr6wSSkibJBWHyyJYNsFySkktWIKX4wb5HFlW+Z57tKy++dG8KjDngwuTjeu0gCYUZLdJz25AXMYNwMrwQuSVWbtzqoApdh6RkuCDsxvUyEHZDWvkoLiMG4CD1Xulb515PGMFZn/UcZMDqwRPS7o5/4zn/kIbPCfnPor41pkffXVWszsQeHXDqRLHK9sOrLHSuMwgCyaLfICnrpMM/hZgdX8Faj6+NM1a72dJi0YPeHBVc9u5jIfx5hQBVO1pnGCiRb8Cd+Qqi/wWy5TdIcvREeaEC+BeLN0mdMfws5SPLArQR1KdqfmwvcoTJyWKRwd4eqWGse6/btzyjIHiAr89s2S3YH00w0X2YWFGSc8FAm4tyCKBK1E7VOA5ZimtUunEM6xrlQRrffDjmEScmu4OFkfaaS9yI67EpKHLopDAU9kVyEe+B36ckniMhZHzLL7YypJLF7k70k6ZlzwTSBhnhiupTWJmfsDTM5YL8NCqegmwCZSIUd7bw8JIO3d2trE80saSSx2Mtz5BVizruIITkmZeudhI7DaBcYkod7ec4LHWRu7qbGNOtCsQ7EDzvASuWwyAi2W/kmc5ows8FReL0nDkN0q9RCBYSSS8GL2xKL3x5M/3PWZX1vYRcBKfyyt6XRmOR9JBFna3GQhe1hLzYvTGe4jFovTGoljZ0Go459ZWNkranXpY0F/akf77nLLm1tOcbjlGy/mzdHS20dPb3Q/eGodjk6fx1ZxF+rH69p2pGBdgktP1WqdXeq9g+Yi99kPleJlBPBHrH3e74/inbDp/TJ3FoamVHJp2I5fGXWdx9BI7lu58btmGF/oJHF83N3bDrpZHE3F9J1heCFlkBz44HmBv9W38NaWSQ1OrOFk2HeuOg6JiMEXgOBHkPMX2eXsHSqj/e+C/dTPOs+vYg1NiE7da8bxBJYUHHlbVpG1ZuhJKrgdjkqCT5gEfg7+F7bekfdQP+qBh3dxYB2wqf7vpfV88CaoT1EiaDhQNa7cJleMABgCO2wU0YjiF1V4c8z3bapuvBJ6yghyvD9fal20QQMWB+pzxpGJyOpm7ls3NPuXasAvLNqwQbAbmA0dS/qtCIAxMlvk/DHAtTQ1GnUAmMGEmeD3s3qj3QCYwGaw25Gn+1WjiUDAZYo4Geo05eDUIhIIJCzBoS7CfraNOIBOYsJjyAzv2GbQCwwFQF4YDxlBX/nv9/qvyIruw7OU6GbMZaT7GHDGwtfz3+v1Dedb/KbEeMqU8y4oAAAAASUVORK5CYII="/></Link>
          <a class="navbar-brand" id="nav" href="/">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link"  to="/signup">Sign up</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login"> Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/users"> Users</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link" to="/aboutus" >
                  About Us
                </Link>
                
              </li>

            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-primary" type="submit">Search</button>

            </form>
          </div>
        </div>
      </nav>




    </div>
  )
}

