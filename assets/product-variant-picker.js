if (!customElements.get('variant-selects')) {
  customElements.define(
    'variant-selects',
    class VariantSelects extends HTMLElement {
      constructor() {
        super();
        this.addEventListener('change', this.onOptionChange.bind(this));
      }

      onOptionChange(event) {
        const target = event.target;
        const selectedOptionValues = Array.from(
          this.querySelectorAll('input[type="radio"]:checked, select')
        ).map((input) => {
          if (input.tagName === 'SELECT') {
            return input.selectedOptions[0]?.dataset.optionValueId;
          }
          return input.dataset.optionValueId;
        }).filter(Boolean);

        // Update the displayed selected value text
        if (target.tagName === 'SELECT') {
          const swatch = target.closest('.product-form__input').querySelector('[data-selected-value]');
          if (swatch) {
            const selectedOption = target.selectedOptions[0];
            if (selectedOption?.dataset.optionSwatchValue) {
              swatch.innerHTML = '';
              const swatchEl = document.createElement('span');
              swatchEl.classList.add('swatch__value');
              swatchEl.style.backgroundImage = selectedOption.dataset.optionSwatchValue;
              swatch.appendChild(swatchEl);
            }
          }
        } else {
          const fieldset = target.closest('fieldset');
          const legend = fieldset?.querySelector('[data-selected-value]');
          if (legend) legend.textContent = target.value;
        }

        publish(PUB_SUB_EVENTS.optionValueSelectionChange, {
          data: {
            event,
            target: this,
            selectedOptionValues,
          },
        });
      }
    }
  );
}
