import React, { useState, useEffect, useRef } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import ProfileInfo from './profileInfo';
import TextArea from 'antd/es/input/TextArea';
import intData from './data/interst.json'
import skillData from './data/skilldata.json'
import eduData from './data/edu.json'


const SkillAndEducation = () => {
    const [text2, setTextChange2] = useState(0)
    const [text3, setTextChange3] = useState(0)
    const maxtext = 400
    const textRef2 = useRef()
    const textRef3 = useRef()
    const [Qualification,setQualification] = useState()
    const interOption = intData.sort()
    const skillOption = skillData.sort()
    const eduOption = eduData.sort()
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value,e) => {
        console.log('search:', value);
        setQualification(value)
      };
      console.log(Qualification)
    const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    // useEffect(() => {
    //     setTextChange2(textRef2.current.resizableTextArea.textArea.value.length)
    //     setTextChange3(textRef3.current.resizableTextArea.textArea.value.length)
    // }, [])
    return (
        <div>
            <ProfileInfo />
            <h5 className='profiletitle'><b>Education</b></h5>
            <hr />
            <Form.List name="education">

                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Qualification']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Qualification',
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch
                                                placeholder="Qualification"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onSearch={onSearch}
                                                filterOption={filterOption}
                                                options={eduOption}
                                            />
                                        </Form.Item>
                                    </div>

                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Percentage']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Percentage',

                                                }
                                            ]}
                                        >
                                            <Input placeholder="Percentage" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Institution']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Institution',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Institution" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'YearRange']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Year Range',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-9">
                                        <Form.Item {...restField}
                                            name={[name, 'EduDes']}
                                        >
                                            <TextArea ref={textRef2} onChange={(e) => setTextChange2(e.target.value.length)} maxLength={400} className='text' placeholder="A brief description about your Education" />
                                        </Form.Item>
                                        <small className='words'>remaining words{maxtext - text2}</small>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ size: 30, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}</div>


                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Education
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5 className='profiletitle'><b>Skills</b></h5>
            <hr />
            <Form.List name="skills">

                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Technology']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Technlogy',
                                                },
                                            ]}
                                        >
                                             <Select
                                                showSearch
                                                placeholder="Technology"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onSearch={onSearch}
                                                filterOption={filterOption}
                                                options={skillOption}
                                            />
                                        </Form.Item>
                                    </div>


                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Rating']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Rating',
                                                }
                                            ]}
                                        >
                                            <Input placeholder="Rating out of 10" />
                                        </Form.Item>

                                    </div>

                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ size: 30, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}</div>


                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Skill
                            </Button>
                        </Form.Item>
                    </>
                )}

            </Form.List>
            <h5 className='profiletitle'><b>Certification</b></h5>
            <hr />
            <Form.List name="Certification">

                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'TitleofCertification']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Certification',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Certification" />
                                        </Form.Item>
                                    </div>


                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Description']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Description',
                                                },
                                            ]}
                                        >
                                            <TextArea ref={textRef3} onChange={(e) => setTextChange3(e.target.value.length)} maxLength={400} placeholder="Description" />
                                        </Form.Item>
                                        <small className='words'>remaining words{maxtext - text3}</small>


                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'YearRange']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Year/Range',
                                                }
                                            ]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>

                                    </div>

                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ size: 30, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}</div>


                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Certification
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5 className='profiletitle'><b>Interest</b></h5>
            <hr />
            <Form.List name="Interest">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Interest']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Interest',
                                                },
                                            ]}
                                        >
                                            {/* <Input placeholder="Interest" /> */}
                                            <Select
                                                showSearch
                                                placeholder="Interest"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onSearch={onSearch}
                                                filterOption={filterOption}
                                                options={interOption}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ size: 30, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}</div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Interest
                            </Button>
                        </Form.Item>
                    </>
                )}

            </Form.List>
        </div>
    )
}

export default SkillAndEducation
