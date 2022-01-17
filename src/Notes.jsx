import React, { useState, useEffect } from 'react';
import data from './data';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ModalDialog from './components/ModalDialog';

function Notes() {
	const [nav, setNav] = useState({
		notes: 'active',
		fav: '',
	})
	const [ payload, setPayload ] = useState(
		localStorage.getItem('payload') ? JSON.parse(localStorage.getItem('payload')) : data
	);
	const [ watch, setWatch ] = useState(false);

	const [ note, setNote ] = useState({
		title: '',
		description: '',
		favorite: false,
		tag: '',
		date: ''
	});

	const [ show, setShow ] = useState(false);


	const handleShow = () => {
		console.log('no stress me');
		setShow(true);
	};

	const handleClose = () => setShow(false);

	const saveData = () => {
		console.log('on page load', payload);
		localStorage.setItem('payload', JSON.stringify(payload));
	};

	const handleFavorite = (index) => {
		payload.map((item, id) => {
			if (id == index) {
				console.log('item', item);
				item.favorite = item.favorite == 'favorite' ? 'not_favorite' : 'favorite';
				setWatch(!watch);
			}
		});
	};

	const addNote = () => {
		console.log('on page load', note);
		const updatedNote = { ...note, date: new Date().toDateString().toString() };
		setNote(updatedNote);

		const updatedPayload = [ ...payload, updatedNote ];
		setPayload(updatedPayload);
		console.log('new note', updatedPayload);
		setShow(false);
		localStorage.setItem('payload', JSON.stringify(updatedPayload));
	};

	const handleChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	const handleDelete = (id) => {
		console.log('deleting');
		let updatedPayload = payload;

		updatedPayload.splice(id, 1);
		// console.log("res", updatedPayload)
		setPayload(updatedPayload);
		setWatch(!watch);
	};

	const handleTag = (index, pressTag) => {
		let listedTags = payload;
		listedTags.map((item, id) => {
			if (id === index) {
				if(item.tag==pressTag){
					item.tag = "nav";
					setWatch(!watch);
				}else{

					item.tag = pressTag;
					setWatch(!watch);
				}
			}
		});
		// console.log(pressTag);
	};
	const favouriteFilter=()=>{
		let listedTags = payload;
		let filtered = listedTags.filter((listTag)=> {
			return listTag.favorite === 'favorite';
		})
		setPayload(filtered);
		setNav({...nav,'fav':'active', 'notes':''})
		// console.log("filtered",filtered);
		// console.log(payload);
	}
	

	const allNotes =()=>{
		setPayload(JSON.parse(localStorage.getItem('payload')));
		setNav({...nav,'fav':'', 'notes':'active'})
		// console.log('payload', payload);
	}
	useEffect(
		() => {
			//on page load
			saveData();
		},
		[ watch ]
	);

	return (
		<div>
			<Nav />

			<div className="main-container" id="container">
				<div className="overlay" />
				<div className="search-overlay" />
				{/*  BEGIN CONTENT AREA  */}
				<div id="content" className="main-content">
					<div className="layout-px-spacing">
						<div className="page-header">
							<nav className="breadcrumb-one" aria-label="breadcrumb">
								<div className="title">
									<h3>Notes</h3>
								</div>
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="javascript:void(0);">Apps</a>
									</li>
									<li className="breadcrumb-item active" aria-current="page">
										<a href="javascript:void(0);">Notes</a>
									</li>
								</ol>
							</nav>
							<div className="toggle-switch">
								<label className="switch s-icons s-outline  s-outline-secondary">
									<input type="checkbox" defaultChecked className="theme-shifter" />
									<span className="slider round">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-sun"
										>
											<circle cx={12} cy={12} r={5} />
											<line x1={12} y1={1} x2={12} y2={3} />
											<line x1={12} y1={21} x2={12} y2={23} />
											<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
											<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
											<line x1={1} y1={12} x2={3} y2={12} />
											<line x1={21} y1={12} x2={23} y2={12} />
											<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
											<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-moon"
										>
											<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
										</svg>
									</span>
								</label>
							</div>
						</div>
						<div className="row app-notes layout-top-spacing" id="cancel-row">
							<div className="col-lg-12">
								<div className="app-hamburger-container">
									<div className="hamburger">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-menu chat-menu d-xl-none"
										>
											<line x1={3} y1={12} x2={21} y2={12} />
											<line x1={3} y1={6} x2={21} y2={6} />
											<line x1={3} y1={18} x2={21} y2={18} />
										</svg>
									</div>
								</div>
								<div className="app-container">
									<div className="app-note-container">
										<div className="app-note-overlay" />
										<div className="tab-title">
											<div className="row">
												<div className="col-md-12 col-sm-12 col-12 text-center">
													<a
														onClick={handleShow}
														id="btn-add-notes"
														className="btn btn-primary"
														href="javascript:void(0);"
													>
														Add
													</a>
												</div>
												<div className="col-md-12 col-sm-12 col-12 mt-5">
													<ul
														className="nav nav-pills d-block"
														id="pills-tab3"
														role="tablist"
													>
														<li className="nav-item">
															<a className={`nav-link list-actions ${nav.notes}`} id="all-notes" onClick={allNotes}>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width={24}
																	height={24}
																	viewBox="0 0 24 24"
																	fill="none"
																	stroke="currentColor"
																	strokeWidth={2}
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	className="feather feather-edit"
																	
																>
																	<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
																	<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
																</svg>{' '}
																All Notes
															</a>
														</li>
														<li className="nav-item">
															<a className={`nav-link list-actions ${nav.fav}`} id="note-fav" onClick={favouriteFilter}>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width={24}
																	height={24}
																	viewBox="0 0 24 24"
																	fill="none"
																	stroke="currentColor"
																	strokeWidth={2}
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	className="feather feather-star"
																	
																>
																	<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
																</svg>{' '}
																
																Favourites
															</a>
														</li>
													</ul>
													<hr />
													<p className="group-section">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={24}
															height={24}
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
															className="feather feather-tag"
														>
															<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
															<line x1={7} y1={7} x2={7} y2={7} />
														</svg>{' '}
														Tags
													</p>
													<ul
														className="nav nav-pills d-block group-list"
														id="pills-tab"
														role="tablist"
													>
														<li className="nav-item">
															<a
																className="nav-link list-actions g-dot-primary"
																id="note-personal"
															>
																Personal
															</a>
														</li>
														<li className="nav-item">
															<a
																className="nav-link list-actions g-dot-warning"
																id="note-work"
															>
																Work
															</a>
														</li>
														<li className="nav-item">
															<a
																className="nav-link list-actions g-dot-success"
																id="note-social"
															>
																Social
															</a>
														</li>
														<li className="nav-item">
															<a
																className="nav-link list-actions g-dot-danger"
																id="note-important"
															>
																Important
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>

										<div id="ct" className="note-container note-grid">
											{console.log('payload', payload)}
											{payload.map((item, index) => (
												<div key={index} className={`note-item all-notes note-${item.tag}`}>
													<div className="note-inner-content">
														<div className="note-content">
															<p className="note-title" data-notetitle={`${item.title}`}>
																{item.title}
															</p>
															<p className="meta-time">{item.date}</p>
															<div className="note-description-content">
																<p
																	className="note-description"
																	data-notedescription={`${item.description}`}
																>
																	{item.description}
																</p>
															</div>
														</div>

														<div className="note-action">
															<svg
																onClick={() => handleFavorite(index)}
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
																className={`feather feather-star fav-note ${item.favorite}`}
																// className={
																//   item.favorite
																//     ? "feather feather-star fav-note favorite"
																//     : "feather feather-star fav-note not_favorite"
																// }
															>
																<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
															</svg>

															<svg
																onClick={() => handleDelete(index)}
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-trash-2 delete-note"
															>
																<polyline points="3 6 5 6 21 6" />
																<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
																<line x1={10} y1={11} x2={10} y2={17} />
																<line x1={14} y1={11} x2={14} y2={17} />
															</svg>
														</div>
														<div className="note-footer">
															<div className="tags-selector btn-group">
																<a
																	className="nav-link dropdown-toggle d-icon label-group"
																	data-toggle="dropdown"
																	href="#"
																	role="button"
																	aria-haspopup="true"
																	aria-expanded="true"
																>
																	<div className="tags">
																		<div className="g-dot-personal" />
																		<div className="g-dot-work" />
																		<div className="g-dot-social" />
																		<div className="g-dot-important" />
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																			stroke="currentColor"
																			strokeWidth={2}
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			className="feather feather-more-vertical"
																		>
																			<circle cx={12} cy={12} r={1} />
																			<circle cx={12} cy={5} r={1} />
																			<circle cx={12} cy={19} r={1} />
																		</svg>
																	</div>
																</a>
																<div className="dropdown-menu dropdown-menu-right d-icon-menu">
																	<a
																		className="note-personal label-group-item label-personal dropdown-item position-relative g-dot-personal"
																		href="javascript:void(0);"
																		
																		onClick={() => handleTag(index, 'personal')}
																	>
																		{' '}
																		Personal
																	</a>
																	<a
																		className="note-work label-group-item label-work dropdown-item position-relative g-dot-work"
																		href="javascript:void(0);"
																		
																		onClick={() => handleTag(index, 'work')}
																	>
																		{' '}
																		Work
																	</a>
																	<a
																		className="note-social label-group-item label-social dropdown-item position-relative g-dot-social"
																		href="javascript:void(0);"
																		
																		onClick={() => handleTag(index, 'social')}
																	>
																		{' '}
																		Social
																	</a>
																	<a
																		className="note-important label-group-item label-important dropdown-item position-relative g-dot-important"
																		href="javascript:void(0);"
																		
																		onClick={() => handleTag(index, 'important')}
																	>
																		{' '}
																		Important
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
								{/* Modal */}
								<div
									className="modal fade"
									id="notesMailModal"
									tabIndex={-1}
									role="dialog"
									aria-labelledby="notesMailModalTitle"
									aria-hidden="true"
								>
									<div className="modal-dialog modal-dialog-centered" role="document">
										<div className="modal-content">
											<div className="modal-body">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={24}
													height={24}
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-x close"
													data-dismiss="modal"
												>
													<line x1={18} y1={6} x2={6} y2={18} />
													<line x1={6} y1={6} x2={18} y2={18} />
												</svg>
												<div className="notes-box">
													<div className="notes-content">
														<form action="javascript:void(0);" id="notesMailModalTitle">
															<div className="row">
																<div className="col-md-12">
																	<div className="d-flex note-title">
																		<input
																			type="text"
																			id="n-title"
																			className="form-control"
																			maxLength={25}
																			placeholder="Title"
																		/>
																	</div>
																	<span className="validation-text" />
																</div>
																<div className="col-md-12">
																	<div className="d-flex note-description">
																		<textarea
																			id="n-description"
																			className="form-control"
																			maxLength={60}
																			placeholder="Description"
																			rows={3}
																			defaultValue={''}
																		/>
																	</div>
																	<span className="validation-text" />
																</div>
															</div>
														</form>
													</div>
												</div>
											</div>
											<div className="modal-footer">
												<button id="btn-n-save" className="float-left btn">
													Save
												</button>
												<button className="btn" data-dismiss="modal">
													{' '}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width={24}
														height={24}
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-trash"
													>
														<polyline points="3 6 5 6 21 6" />
														<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
													</svg>{' '}
													Discard
												</button>
												<button id="btn-n-add" className="btn">
													Add
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*  END CONTENT AREA  */}
			</div>

			<ModalDialog
				showprop={show}
				closeprop={handleClose}
				note={note}
				handleChange={handleChange}
				save={addNote}
			/>
			<Footer/>
		</div>
	);
}

export default Notes;
