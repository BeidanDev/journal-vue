import { shallowMount } from '@vue/test-utils';

import FabComponent from '@/modules/daybook/components/FabComponent.vue';

describe('Pruebas en el FAB component', () => {
    test('debe de mostrar el ícono por defecto', () => {
        const wrapper = shallowMount(FabComponent);
        const iTag = wrapper.find('i');

        expect(iTag.classes('fa-plus')).toBeTruthy();
    });

    test('debe de mostrar el íconoo por argumento: fa-circle', () => {
        const wrapper = shallowMount(FabComponent, {
            props: {
                icon: 'fa-circle'
            }
        });

        const iTag = wrapper.find('i');

        expect(iTag.classes('fa-circle')).toBeTruthy();
    });

    test('debe de emitir el evento on:click cuando se hace click', () => {
        const wrapper = shallowMount(FabComponent);

        wrapper.find('button').trigger('click');

        expect(wrapper.emitted('on:click')).toHaveLength(1);
    });
});