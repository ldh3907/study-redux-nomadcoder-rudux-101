# vanilla-redux

1.redux == state를 관리할 수 있게해주는 라이브러리?

ex

    import { createStore } from "redux";

라는 형식으로 import

2.createStore == state를 넣을 수 있는 공간

ex)

    countStore = createStore() 라는 형식으로 선언.

# 하지만 저것만으로는 에러가 난다. 이유는

3.reducer == state를 관리하고 바꿔주는 함수?

ex)

    countStore = createStore(reducer) <= 이렇게 넣어줌

reducer의 이름은 마음대로 바꿔도 상관없다. reducer에서는 받은 state를 가공해서 리턴해준다.

ex)

    const countModifier = (count = 0) =>{
        return count
    }

4.getState == reducer에서 리턴해준 state 를 받아오는 함수.

ex)

    console.log(countStore.getState()) 이런식으로 호출

5.action == reducer 에서 state를 관리하거나 가공할때 필요한 함수.

ex)

    const countModifier = (count = 0, action) =>{
        console.log(action)
        return count
    }

6.dispatch == 오브젝트를 리턴해서 reducer에게 주는 함수

ex)

    countStore.dispatch({type : "add"})

여기서 리턴한 type을 통해 reducer에서 state를 가공하고 관리한다.

ex)

    const countModifier = (count = 0, action) =>{
        if(action.type == "add"){
            #add function
        }
        return count
    }

7.subscribe == 스토어 안에있는 state의 변화를 감지하여 함수를 호출하는 함수

ex)

    countStore.subscribe(func)

8.Provider == 스토어 안에있는 여러 state 들과 여러 함수들을 다른 컴포넌트에게 공유 할 수 있게 해주는 함수

ex)

    import { Provider } from "react-redux";

    <Provider store={store}>
        <component />
    </Provider>

9.connect == Provider 함수로 공유 된 state들과 함수를 컴포넌트에서 연결하기 위해 사용하는 함수

ex)

    import { connect } from "react-redux";

    export default connect(mapStateToProps, mapDispatchToProps)(Home);

라고 씀. connect 함수에서는 두개의 인자를 받아 오는데, 첫번째는 state와 관련된 것이고, 2번째는 dispatch와 관련된 것이다.
