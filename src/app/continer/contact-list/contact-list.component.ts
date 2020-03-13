import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector:'ndc-contact-list',
    templateUrl:'./contact-list.component.html',
    styleUrls:['./contact-list.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})

export class ContactListComponent{

    message: string = 'xinchao';
    printable = true;
    
    tabIndex: number=1;
    contacts=[{
        id:1,
        name: 'ABa',
        avatar:{url:'https://i.9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-4.jpg'
    }
    },
       {
            id:2,
            name: 'ABa1',
            avatar:{url:'https://9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-1.jpg'
       }
    },
            {
                id:3,
                name: 'ABa2',
                avatar:{url:'https://9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-1.jpg'
            }

    }];
    changeTab(tabIndex) {
        this.tabIndex = tabIndex ;
    }
}