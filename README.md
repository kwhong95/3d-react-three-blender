# 블랜더란 무엇인가?

> 무료 CG 프로그램

Blender <-> 후원하는 단체, 개인  
= 좋은 무료 CG 프로그램

## 블랜더로 할 수 있는 기능

### Modeling

- mesh
- tools
- modifiers
- UV unwrapping

### Rendering

- Geometry
- Lighting
- Shading
- Camera
- Texture
- FreeStyle

### Sculpting

- Brush
- Remesh

### Rigging & Animation

- Rigging(물체에 뼈를 심어 움직이는 동작을 생성)
- Animation
- Shape Key

### Grease Pencil

- 2D in 3D
- Sculpt
- Rigging
- Modifiers
- Animation
- Onion Skinning

### VFX

- Compositing
- Motion Tracking

### Simulation

- Smoke & Fire
- Fluids
- Hair
- Cloth
- Rigid Bodies
- Particle

### Video Editing

놀랍게도

- Preview
- Audio Mixing

## 화면 구성

> 기본 화면 구성 : 상, 중, 하

- 상(Top Bar): Menu + Workspace
- 중(Area Zone): 내 맘대로 변경 가능
  - 3D Viewport: 3D 물체를 생성, 편집, 복시 등 작업 공간
  - Outliner: 폴더처럼 물체를 관리
  - Properties: 물체의 특성을 관리하는 탭
  - Timeline: Frame 단위로 시간 순서를 관리하는 탭
- 하(State Bar): 단축키 힌트, 물체의 상태, 블렌더 버전 정보

## 기초 사용법

### 기본 단축키

| 행동                  | 단축키1                    | 단축키2   | 단축키 3     |
| --------------------- | -------------------------- | --------- | ------------ |
| 물체 선택하기(Select) | LMB(왼쪽 마우스 버튼)      |
| 다중 선택             | Shift + LMB                | LMB Drag  |
| 전체 선택             | A                          |
| 전체 해제             | A x 2(더블 클릭)           | Alt + A   | 빈 공간 클릭 |
| 메뉴 보기             | RMB                        |
| 삭제                  | 메뉴 > Delete              | X         | Delete       |
| 실행 취소             | CMD + Z                    |
| 실행 취소 되돌리기    | CMD + Shift + Z            |
| 화면 돌리기           | MMB + Drag(마우스 휠 버튼) |
| 화면 확대             | CMD + Up/Down              |
| 화면 이동             | Shift + Wheel              |
| View pie menu         | `(~)                       |
| 물체 생성             | Shift + A                  |
| 선택 물체 바로 보기   | 파이메뉴 > View Selected   |
| 전체 물체 보기        | HOME                       |
| 선택 물체만 보기      | /                          |
| 물체 복사하기         | 메뉴 > Duplicate           | Shift + D |
| 축 이동               | 행동 중 X or Y or Z 누르기 |
| 행동 반복하기         | Shift + R                  |

### 툴바 사용법

- ON / OFF : T

1. Select

- Select Box: 박스 형태 드래그로 다중 선택 가능
- Tweak(트윅): 선택 시 바로 이동 가능
- Select Circle: 원이 지나가는 구간만 선택 가능
- Select Lasso(올가미)

2. Cursor

- Cursor(3D) 에서 물체가 생성
- 기준점을 만든다

3. Move(`G`) - - 물체 이동

4. Rotate(`R`) - 물체 회전

5. Scale(`S`) - 물체 크기 조정

6. Transform - move + rotate + scale

7. Annotate - 화면 필기 기능

8. Measure - 물체 길이 측정

9. Add Measure

- 물체를 쉽게 표면에 생성 가능
- 물체의 경사면을 따라 생성

### Mode

1. Object Mode

- 물체 덩어리로 변형

2. Edit Mode(`Tab`)

- 물체의 기본적인 근원을 변형 (점, 선, 면 등)
