import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

const CardCustom = styled.div`
  width: 442px;
  height: 493px;
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  background-color: var(--white-0);
`

const CodeSkooldio = () => {
    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
        setDataArray(data)
    }
    return (
        <Container>
            <Row>
                {dataArray.length > 0 && dataArray.map(value =>
                    <Col>
                        <CardCustom>
                            <div className="card-header-custom">
                                <Image src="/icon/engi.png" srcset="/icon/engi@2x.png 2x,/icon/engi@3x.png 3x"
                                       className="engi"/>
                                <div>
                                    <span className="text-style">{value.faculty.name}</span>
                                    <span className="text-style-2">{value.name}</span>
                                    <span className="text-style-3">{value.faculty.university.name}</span>
                                </div>
                            </div>
                            <div className="line"/>
                            <div>
                                <span className="open-text">รอบที่เปิด</span>
                                {value.roundSeats.map((seatCount, index) =>
                                    <div className={seatCount > 0 ? 'Oval-1' : 'Oval-2'}>{index+1}</div>
                                )}
                            </div>
                            <div className="">
                                <span className="Admission-Copy">รอบที่ 4 : Admission</span>
                                <Button className="button-custom">แก้ไขคะแนน</Button>
                            </div>
                        </CardCustom>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default CodeSkooldio
