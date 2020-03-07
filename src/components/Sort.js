import React from 'react';

class Sort extends React.Component {
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a href="/#">
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
</span>
                        </a>
                    </li>
                    <li role="separator" className="divider" />
                    <li><a href="/#">Trạng Thái Kích Hoạt</a></li>
                    <li><a href="/#">Trạng Thái Ẩn</a></li>
                </ul>
            </div>
        );
    }
}
export default Sort;