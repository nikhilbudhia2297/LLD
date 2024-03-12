import {VendingMachine} from "./VendingMachine";
import {TenCoin} from "./coins/TenCoin";
import {TwentyCoin} from "./coins/TwentyCoin";
import {Product} from "./Product";
import {FiftyCoin} from "./coins/FiftyCoin";

function main(){
    const vm = new VendingMachine();

    // vm.getState().onStart(vm);
    //
    // vm.getState().insertCoin(vm, new TenCoin());
    // vm.getState().insertCoin(vm, new TwentyCoin());
    // vm.getState().insertCoin(vm, new TwentyCoin());
    //
    // vm.getState().startSelectItem(vm);
    //
    // const product = new Product(1, 10);
    //
    // vm.getState().selectItem(vm, product);

    vm.getState().onStart(vm);
    vm.getState().insertCoin(vm, new FiftyCoin());

    vm.getState().startSelectItem(vm);

    const p = new Product(3, 10);

    vm.getState().selectItem(vm, p);

}

main();