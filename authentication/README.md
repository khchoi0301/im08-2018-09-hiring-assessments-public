## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords
  password를 그대로, db에 저장할 경우
  db 정보가 유출되면 id,password가 그대로 유출됨
  encrypted password를 통해 보안을 강화할 수 있음

- Encrypted passwords
  password를 변환하여 저장함
  SHA1 등 알려진 변환 방식을 사용할 경우 보안에 취약할 수 있음.
  취약한 비밀번호를 대상으로 변환방식을 적용한 후 무작위로 공격하는 방식에 취약함
  hashes password를 사용하여 보안을 강화함

- Hashed passwords
  encryped password 보다 보안이 강화됨, 
  복잡한 salt를 적용할 경우 해킹이 더욱 어려움.
  hashed된 password의 경우 정보가 유실되기 때문에 역 변환이 불가능함
  (비밀번호를 잊어 버린 경우, 찾을 방법은 없고 초기화 해야함)
