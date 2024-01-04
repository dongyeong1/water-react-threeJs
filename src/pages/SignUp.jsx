import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 600px;
  height: 800px;
  background-color: gray;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AddButton = styled.div`
  width: 300px;
  height: 60px;
  background-color: red;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  width: 400px;
  border-radius: 20px;
  height: 40px;
`;

const PhoneWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;

  border-radius: 50%;
  width: 60px;
  height: 50px;
  background-color: blue;
`;

const InputWrapper = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  margin-top: 100px;

  justify-content: center;
`;
const InputLabel = styled.label`
  width: 100px;
  display: flex;

  align-items: center;
`;

const CustomInput = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 20px;
  border: none;
`;

const Wrap = styled.div`
  margin-top: 50px;
`;

const SignUpButton = styled.button`
  position: absolute;
  bottom: 10px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: none;
  left: 50%;
  transform: translateX(-50%);
`;
const ErrorWrapper = styled.div`
  color: red;
  margin-top: 5px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: [{ number: "010-4187-4588" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phoneNumber",
  });

  const onSubmit = (e) => {
    console.log(e);
  };

  const nameRegister = register("name", {
    required: { value: true, message: "이름을 입력해주세요" },
  });

  const emailRegister = register("email", {
    required: { value: true, message: "이메일을 입력해주세요" },
  });
  const passwordRegister = register("password", {
    required: {
      value: true,
      message: "비밀번호를 입력해주세요",
    },
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <InputLabel>이름</InputLabel>
          <CustomInput {...nameRegister}></CustomInput>
        </InputWrapper>
        <ErrorWrapper>{errors["name"]?.message}</ErrorWrapper>
        <InputWrapper>
          <InputLabel>이메일</InputLabel>
          <CustomInput {...emailRegister}></CustomInput>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>비밀번호</InputLabel>
          <CustomInput type="password" {...passwordRegister}></CustomInput>
        </InputWrapper>
        <Wrap>
          {fields.map((v, index) => {
            return (
              <PhoneWrapper>
                <InputLabel>전화번호</InputLabel>
                <CustomInput
                  {...register(`phoneNumber.${index}.number`)}
                ></CustomInput>{" "}
                {index > 0 && (
                  <RemoveButton
                    onClick={(e) => {
                      remove(index);
                      console.log(index);
                    }}
                  >
                    삭제
                  </RemoveButton>
                )}
              </PhoneWrapper>
            );
          })}
        </Wrap>
        {fields.length < 3 && (
          <AddButton
            onClick={() => {
              append({ number: "" });
              console.log("fifififif", fields);
            }}
          >
            추가하기
          </AddButton>
        )}

        <SignUpButton type="submit">회원가입</SignUpButton>
      </form>
    </Wrapper>
  );
};

export default SignUp;
