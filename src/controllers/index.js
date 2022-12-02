import {
  logout,
  subscribeAuth,
  subscribeUserBanners,
  addUserBanner,
  removeUserBanner,
} from '../utils/fireBaseUtils';
import { getParentUrl, showErrorMessage } from '../utils/utils';
import { serverTimestamp } from 'firebase/firestore';

// Check logged
subscribeAuth((user) => {
  if (user) {
    // Add banner
    const addBannerForm = document.querySelector('#addBannerForm');
    addBannerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let text = addBannerForm.newBannerText.value;
      if (text) {
        let banner = {
          color1: '#CCCCCC',
          color2: '#333333',
          created: serverTimestamp(),
          duration: 3,
          name: text,
          style: 'Text-Animation',
          text: ['Sample text'],
          user: user.uid,
        };
        addUserBanner(banner, null, (err) => {
          showErrorMessage(err);
        });
      } else {
        showErrorMessage('Please add a name for the banner');
      }
    });
    // Show banners
    let baseUrl = getParentUrl();
    subscribeUserBanners(user.uid, (banners) => {
      let bannerTable =
        '<table id="bannerList" class="table"> \
            <thead>\
                <tr>\
                <th scope="col"><b>Created</b></th>\
                <th scope="col"><b>Name</b></th>\
                <th scope="col"><b>Url</b></th>\
                <th scope="col"><b>Actions</b></th>\
                </tr>\
            </thead>\
        <tbody>';
      if (banners.length > 0) {
        for (let i in banners) {
          let created = new Date(banners[i].created.seconds * 1000);
          let viewUrl = baseUrl + 'banner.html?id=' + banners[i].id;
          let editUrl = baseUrl + 'edit.html?id=' + banners[i].id;
          bannerTable +=
            '<tr><td>' +
            created.toLocaleString('en-US') +
            '</td><td>' +
            banners[i].name +
            '</td><td><a target="_blank" href="' +
            viewUrl +
            '">' +
            viewUrl +
            '</a></td><td style="padding: 10px"><a href="' +
            editUrl +
            '" class="btn btn-secondary" role="button" aria-pressed="true"><i class="fa fa-edit"></i></a><button href="' +
            editUrl +
            '" class="btn btn-danger" onclick="window.deleteBanner(\'' +
            banners[i].id +
            '\')" style="margin-left: 10px"><i class="fa fa-trash"></i></button></td> \
            </tr>';
        }
      } else {
        bannerTable +=
          '<tr>\
                    <td colspan="4"><i>There is no banner for this user</i></td>\
                </tr>';
      }
      bannerTable +=
        '</tbody>\
        </table>';

      let bannerList = document.getElementById('bannerList');
      bannerList.innerHTML = bannerTable;
    });
  } else {
    document.location = 'login.html';
  }
});

const logoutButton = document.querySelector('#logoutBtn');
logoutButton.addEventListener('click', () => {
  logout();
});

window.deleteBanner = (id) => {
  if (confirm('Are you sure want to delete the banner?')) {
    removeUserBanner(id, null, (err) => {
      showErrorMessage(err);
    });
  }
};
