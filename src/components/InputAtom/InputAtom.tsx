import './InputAtom.scss'

import {defineComponent, ref, watch} from 'vue'
import {debounce} from 'lodash'

import GapTwo from '@/components/GapTwo/GapTwo'
import close from '@/assets/icons/ic_close01.svg'


export default defineComponent({
    name: 'InputAtom',
    components: {
        GapTwo,
    },
    props: {
        onSearch: {
            type: Function,
            require: true,
        }
    },
    emits: {
        //@ts-ignore
        updateBx: (v: string) => true,
    },
    setup(props, {emit}) {
        const t = ref('')
        // const emit = defineEmits<{
        //   (e: 'searchAx', id: number): void
        //   (e: 'updateAx', value: string): void
        // }>()

        const childrenSlot = {
            default: () => {
                return <div className="close-tips" onClick={() => {
                    t.value = ''
                }}>
                    <img alt="close" src={close}/>
                </div>
            },
        }


        const search = (v: string) => {
            console.log('child =>', v)
            //@ts-ignore
            props.onSearch(v)
            emit('updateBx', v)
        }
        const dbsearch = debounce(search, 300)

        watch(
            () => t.value,
            (n, _) => {
                dbsearch(n)
                if (n === '') {
                }
                // console.log(o,n)
            }
        )

        return () => (
            <div className="input-atom">
                <gap-two v-slots={childrenSlot}/>
                <input type="text" placeholder="输入关键字" v-model={t.value}
                    //@ts-ignore
                    // onKeypress={dbsearch}
                />
            </div>
        )
    },
})
