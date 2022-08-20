        // import * as m1 from "./m1.js";
        // import * as m2 from "./m2.js";
        // import * as m3 from "./m3.js";

        // 结构赋值导入法
        // import {default as m3} from "./m3.js"
        // console.log(m3.MyName)
        // m3.fly()

        // import {name, fly} from "./m1.js"
        // import {name as MyName, fly as IFly} from "./m2.js"
        // IFly()

        // m3 的简写形式，只能用于默认暴露
        import m3 from "./m3.js"
        m3.fly()