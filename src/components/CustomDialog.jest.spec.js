import {installQuasarPlugin} from "@quasar/quasar-app-extension-testing-unit-jest";
import {describe, expect, it} from "@jest/globals";
import {mount} from "@vue/test-utils";
import CustomDialog from "components/CustomDialog";

installQuasarPlugin();

describe('QDialog test', () => {

  it('full mount of dialog test', () => {
    /**
     * Unhandled error appears only if we try to open dialog
     */
    const wrapper = mount(CustomDialog, {data: () => ({
        isDialogOpen: true
      })});

    expect(wrapper.exists()).toBe(true);
  })

})
