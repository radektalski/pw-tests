import { BaseElement } from "../../engine/BaseElement";

export class CheckboxElement extends BaseElement {
  readonly checkBoxSel: string;
  readonly errorSel: string;

  constructor(selector: string) {
    super(selector);
  }

  async check(): Promise<void> {
    await this.element(this.checkBoxSel).check();
  }

  async isChecked(): Promise<boolean> {
    const checkbox = await this.element(this.checkBoxSel);
    return await checkbox.isChecked();
  }
}
